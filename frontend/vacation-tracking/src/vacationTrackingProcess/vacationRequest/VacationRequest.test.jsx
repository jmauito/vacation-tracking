import React from 'react';
import { render, screen, act, waitFor, fireEvent, within } from '@testing-library/react';
import {jest} from '@jest/globals';
import useVacationTrackingService from '../../hooks/useVacationTrackingService';
import { VacationRequest } from './VacationRequest';

jest.mock('../../hooks/useVacationTrackingService');
const mockedVacationTrackingService = jest.mocked(useVacationTrackingService);

jest.mock('../../components/template/TopSidebar', () => ({
  TopSidebar: () => <mock-top-sidebar data-testid="top-sidebar" />,
}));
jest.mock('../../components/template/LeftSidebar', () => ({
  LeftSidebar: () => <mock-left-sidebar data-testid="left-sidebar" />,
}));

const setRequestTypeId = jest.fn();
window.alert = jest.fn();

const requestTypes = [
  {
      "id": 1,
      "name": "Tiempo anual de vacaciones"
  },
  {
      "id": 2,
      "name": "Solicitar licencia con cargo a vacaciones"
  }
];

describe('first', () => { 

  beforeEach(async () => {

      mockedVacationTrackingService.mockReturnValue({
          getAuthData: jest.fn(),
          getData: jest.fn().mockReturnValue(requestTypes),
          postData: jest.fn().mockReturnValue(true),
          putData: jest.fn()  
      })

      await act(async () => render(
          <VacationRequest />
      ))
  })

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test('should show the title form', () => { 
    const titleForm = screen.getByText(/solicitud de vacaciones/i);
    expect(titleForm).toBeInTheDocument;
  });

  test('should show the labels inputs from the form', () => { 
      const labels = screen.queryAllByLabelText(/.+/);
      const labelRequesType = screen.getByLabelText(/tipo de solicitud/i);
      const labelTitle = screen.getByLabelText(/titulo/i);
      const labelComments = screen.getByLabelText(/comentarios/i);

      expect(labels.length).toBeGreaterThanOrEqual(4);
      expect(labelRequesType).toBeInTheDocument;
      expect(labelTitle).toBeInTheDocument;
      expect(labelComments).toBeInTheDocument;
  });

  test('should show the inputs controls from the form', () => { 
    const inputs = screen.getAllByRole('textbox');
    const combobox = screen.getAllByRole('combobox');
    const buttton = screen.getByRole('button', {name: /registrar el elemento/i});

    expect(inputs.length).toEqual(4); 
    expect(combobox.length).toEqual(1);
    expect(buttton).toBeInTheDocument;
  });

  test('should show the text typed in the input controls of the forms', () => { 
    const inputs = screen.getAllByRole('textbox');
    const inputDescriptions = [
      "test titulo",
      "test comentario",
      "12-01-2023",
      "14-01-2023",
    ];

    inputs.forEach((input, index) => {
      fireEvent.change(input, {target: {value: inputDescriptions[index]}});
      expect(screen.queryByText(inputDescriptions[index])).toBeInTheDocument;
    });  
  });

  test('should show the combobox options', async () => { 
    const autocmplete = screen.getByTestId("request-type");
    const input = within(autocmplete).getByRole("combobox");

    fireEvent.focus(autocmplete);
    fireEvent.change(input, { target: { value: "Tiempo anual de vacaciones" }});

    await waitFor(() => {
      requestTypes.forEach(({name}) => {
        expect(screen.getByText(name)).toBeInTheDocument;
      });
    });
  });

  test('should call hook setRequestTypeId when selected combobox option', async() => { 
    const autocmplete = screen.getByTestId("request-type");
    const input = within(autocmplete).getByRole("combobox");
    
    fireEvent.focus(autocmplete);
    fireEvent.change(input, { target: { value: "Tiempo anual de vacaciones" }});

    fireEvent.change(autocmplete);
    fireEvent.keyDown(autocmplete, { key: "ArrowDown" });
    fireEvent.keyDown(autocmplete, { key: "ArrowDown" });
    fireEvent.keyDown(autocmplete, { key: "Enter" });

    await waitFor(() => {
      expect(setRequestTypeId).toBeCalled;
    });
  });

  test('should send data when press the register button', async() => { 
    const butttonRegister = screen.getByRole('button', {name: /registrar el elemento/i});
    const inputs = screen.getAllByRole('textbox');
    const inputDescriptions = [
      "test titulo",
      "test comentario",
      "12-01-2023",
      "14-01-2023",
    ];
    const autocmplete = screen.getByTestId("request-type");
    const input = within(autocmplete).getByRole("combobox");

    inputs.forEach((input, index) => {
      fireEvent.change(input, {target: {value: inputDescriptions[index]}});
    });

    fireEvent.click(butttonRegister);
    fireEvent.focus(autocmplete);
    fireEvent.change(input, { target: { value: "Tiempo anual de vacaciones" }});
    fireEvent.change(autocmplete);
    fireEvent.keyDown(autocmplete, { key: "ArrowDown" });
    fireEvent.keyDown(autocmplete, { key: "ArrowDown" });
    fireEvent.keyDown(autocmplete, { key: "Enter" });

    await waitFor(() => {
      expect(mockedVacationTrackingService().postData).toHaveLastReturnedWith(true);
    });

  });

})