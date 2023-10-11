import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { TextField, Autocomplete } from "@mui/material";
import Button from "@mui/material/Button";
import { MainTemplate } from "../../components/template/MainTemplate";
import useVacationTrackingService from "../../hooks/useVacationTrackingService";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export const VacationRequest = () => {
  const { getData, postData } = useVacationTrackingService();
  const [requestTypeList, setRequestTypeList] = useState([]);
  const [title, setTitle] = useState(null);
  const [comment, setComment] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [finishDate, setFinishDate] = useState(null);
  const [requestTypeId, setRequestTypeId] = useState(null);

  const onClickSave = async () => {
    const response = await postData("my-requests", {
      requestTypeId: requestTypeId,
      title: title,
      comment: comment,
      startDate: startDate,
      finishDate: finishDate,
    });

    if (response) {
      alert("solicitud Enviada");
    }
  };

  useEffect(() => {
    const resultado = async () => {
      const response = await getData("requests-types");
      setRequestTypeList(response);
    };
    resultado();
  }, []);

  return (
    <MainTemplate>
      <Grid container>
        <Grid item md={6}>
          <Grid container direction="column" spacing={2}>
            <Grid item>
              <h1>Solicitud de vacaciones</h1>
            </Grid>
            <Grid item>
              <Autocomplete
                options={requestTypeList}
                getOptionLabel={(option) => option.name}
                fullWidth
                data-testid="request-type"
                renderInput={(params) => (
                  <TextField {...params} label="Tipo de solicitud" />
                )}
                onChange={(e, selectedItem) => {
                  setRequestTypeId(selectedItem.id);
                }}
              />
            </Grid>
            <Grid item>
              <TextField
                label="Titulo"
                fullWidth
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
                value={title || ""}
              />
            </Grid>
            <Grid item>
              <TextField
                label="Comentarios"
                value={comment || ""}
                fullWidth
                multiline
                rows={4}
                onChange={(e) => {
                  setComment(e.target.value);
                }}
              />
            </Grid>
            <Grid item>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={["DatePicker", "DatePicker"]}>
                  <DatePicker
                    label="Fecha de inicio"
                    value={finishDate || null}
                    onChange={(newValue) => setStartDate(newValue)}
                    sx={{ width: "50%" }}
                  />
                  <DatePicker
                    label="Fecha de fin"
                    value={finishDate || null}
                    onChange={(newValue) => setFinishDate(newValue)}
                    sx={{ width: "50%" }}
                  />
                </DemoContainer>
              </LocalizationProvider>
            </Grid>
            <Grid item>
              <Button variant="contained" onClick={onClickSave}>
                Registrar el elemento
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={6}></Grid>
      </Grid>
    </MainTemplate>
  );
};
