package rest_services.interfaces;

import javax.ws.rs.core.Response;

public interface IUserAuthenticationService {
    Response logIn(String username, String password) throws RESTException;
    Response logOut() throws RESTException;

    Response setUserField(String username, String password, String userFieldKey, String value) throws RESTException;
    Response getUserField(String username, String password, String userFieldKey) throws RESTException;

    Response getCurrentUser() throws RESTException;
    Response isLoggedIn() throws RESTException;
}