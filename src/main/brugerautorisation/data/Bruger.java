package brugerautorisation.data;

import java.io.Serializable;
import java.util.HashMap;

public class Bruger implements Serializable {

    private static final long serialVersionUID = 12345L;
    public String brugernavn;
    public String email = "hvad@ved.jeg.dk";
    public long sidstAktiv;
    public String campusnetId;
    public String studeretning = "ukendt";
    public String fornavn = "test";
    public String efternavn = "testesen";
    public String adgangskode;
    public HashMap<String, Object> ekstraFelter = new HashMap();

    public Bruger() {

    }

    public String toString() {
        return this.email;
    }

}