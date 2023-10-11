package ec.edu.ucacue.vacationtracking.services;

public abstract class Restriction {
    protected String name;
    protected String description;
    public boolean validate(RequestService request) throws Exception{
        throw new Exception("Validate no implemented");
    }
}
