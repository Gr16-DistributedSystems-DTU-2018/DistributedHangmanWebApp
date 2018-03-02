package rest_services;

import brugerautorisation.data.Bruger;
import rest_services.interfaces.IUserAuthenticationService;
import rest_services.interfaces.RESTException;
import server.logic.rmi.IGameLogic;
import server.util.Utils;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.rmi.Naming;
import java.rmi.RemoteException;

@Path("/auth")
public final class UserAuthenticationService implements IUserAuthenticationService {

    private IGameLogic logic;

    public UserAuthenticationService() throws Exception {
        logic = (IGameLogic) Naming.lookup(Utils.RMI_STUB_URL_REMOTE_LOGIC_JAVABOG);
    }

    @POST
    @Path("/login")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.TEXT_PLAIN)
    public Response logIn(
            @QueryParam("username") String username,
            @QueryParam("password") String password) throws RESTException {
        try {
            logic.logIn(username, password);
            return Response.ok().entity(username + " logged in successfully.").build();
        } catch (RemoteException e) {
            return Response.serverError().entity(e.getMessage()).build();
        }
    }

    @POST
    @Path("/logout")
    @Produces(MediaType.TEXT_PLAIN)
    public Response logOut() throws RESTException {
        try {
            logic.logOut();
            return Response.ok().entity("Logged out successfully.").build();
        } catch (RemoteException e) {
            return Response.serverError().entity(e.getMessage()).build();
        }
    }

    @POST
    @Path("/set_user_field")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.TEXT_PLAIN)
    public Response setUserField(
            @QueryParam("username") String username,
            @QueryParam("password") String password,
            @QueryParam("userFieldKey") String userFieldKey,
            @QueryParam("value") String value) throws RESTException {
        try {
            logic.setUserField(username, password, userFieldKey, value);
            return Response.ok().entity("Set user field: " + userFieldKey + ":" + value).build();
        } catch (RemoteException e) {
            return Response.serverError().entity(e.getMessage()).build();
        }
    }

    @GET
    @Path("/get_user_field")
    @Produces(MediaType.TEXT_PLAIN)
    @Consumes(MediaType.APPLICATION_JSON)
    public Response getUserField(
            @QueryParam("username") String username,
            @QueryParam("password") String password,
            @QueryParam("userFieldKey") String userFieldKey) throws RESTException {
        try {
            String userField = logic.getUserField(username, password, userFieldKey);
            return Response.ok().entity(userField).build();
        } catch (RemoteException e) {
            return Response.serverError().entity(e.getMessage()).build();
        }
    }

    @GET
    @Path("/get_current_user")
    @Produces(MediaType.APPLICATION_JSON)
    public Response getCurrentUser() throws RESTException {
        try {
            Bruger user = logic.getCurrentUser();

            if (user != null)
                return Response.ok().entity(user).build();
            else
                return Response.ok().entity("User is null!").build();
        } catch (RemoteException e) {
            return Response.serverError().entity(e.getMessage()).build();
        }
    }

    @GET
    @Path("/is_logged_in")
    @Produces(MediaType.TEXT_PLAIN)
    public Response isLoggedIn() throws RESTException {
        try {
            boolean isLoggedIn = logic.isLoggedIn();
            return Response.ok().entity(isLoggedIn).build();
        } catch (RemoteException e) {
            return Response.serverError().entity(e.getMessage()).build();
        }
    }

    @GET
    @Produces(MediaType.TEXT_PLAIN)
    @Path("/test")
    public String getTest() {
        return "UserAuthentication test working! :)";
    }

}