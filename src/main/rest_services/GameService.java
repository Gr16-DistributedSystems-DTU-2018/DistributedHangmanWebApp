package rest_services;

import brugerautorisation.data.Bruger;
import rest_services.interfaces.IGameService;
import rest_services.interfaces.RESTException;
import server.logic.rmi.IGameLobby;
import server.logic.rmi.IGameLogic;
import server.util.Utils;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.rmi.Naming;
import java.rmi.RemoteException;
import java.util.List;
import java.util.Map;

@Path("/game")
public class GameService implements IGameService {

    private static final String ERROR = "Server error has occurred: ";

    private IGameLobby lobby;

    public GameService() throws Exception {
        lobby = (IGameLobby) Naming.lookup(Utils.RMI_STUB_URL_REMOTE_LOBBY_JAVABOG);
    }

    /*
     * Lobby
     */
    @POST
    @Path("/login")
    @Consumes(MediaType.TEXT_PLAIN)
    @Produces(MediaType.TEXT_PLAIN)
    public Response logIn(
            @QueryParam("username") String username,
            @QueryParam("password") String password) throws RESTException {
        try {
            /* ######### TEMPORARY FIX... LOGS OUT THE USER FIRST! ######## */
            try {
                lobby.logOut(username);
                System.out.println("###### " + username + " was already logged in, so we logged them out! ########");
            } catch (Exception ignored) {

            }
            lobby.logIn(username, password);
            return Response.ok().entity(username + " logged in successfully.").build();
        } catch (RemoteException e) {
            return Response.serverError().entity(ERROR + e.getMessage()).build();
        }
    }

    @POST
    @Path("/logout")
    @Consumes(MediaType.TEXT_PLAIN)
    @Produces(MediaType.TEXT_PLAIN)
    public Response logOut(
            @QueryParam("username") String username) throws RESTException {
        try {
            lobby.logOut(username);
            return Response.ok().entity(username + " logged out successfully.").build();
        } catch (RemoteException e) {
            return Response.serverError().entity(ERROR + e.getMessage()).build();
        }
    }

    @GET
    @Path("/get_logic")
    @Consumes(MediaType.TEXT_PLAIN)
    @Produces(MediaType.APPLICATION_JSON)
    public IGameLogic getGameLogicInstance(
            @QueryParam("username") String username) throws RESTException {
        try {
            return lobby.getGameLogicInstance(username);
        } catch (RemoteException e) {
            return null;
        }
    }

    @GET
    @Path("/get_all_current_usernames")
    @Produces(MediaType.TEXT_PLAIN)
    public Response getAllCurrentUserNames() throws RESTException {
        try {
            List<String> usernames = lobby.getAllCurrentUserNames();
            return Response.ok().entity(usernames).build();
        } catch (RemoteException e) {
            return Response.serverError().entity(ERROR + e.getMessage()).build();
        }
    }

    @GET
    @Path("/get_current_user_amount")
    @Produces(MediaType.TEXT_PLAIN)
    public Response getUserAmount() throws RESTException {
        try {
            int userAmount = lobby.getUserAmount();
            return Response.ok().entity(userAmount).build();
        } catch (RemoteException e) {
            return Response.serverError().entity(ERROR + e.getMessage()).build();
        }
    }

    @GET
    @Path("/get_logged_in_user")
    @Produces(MediaType.APPLICATION_JSON)
    public Response getLoggedInUser(
            @QueryParam("username") String username) throws RESTException {
        try {
            Bruger user = lobby.getLoggedInUser(username);
            if (user != null)
                return Response.ok().entity(user).build();
            else
                return Response.serverError().entity(ERROR + "User is null!").build();
        } catch (RemoteException e) {
            return Response.serverError().entity(ERROR + e.getMessage()).build();
        }
    }

    @GET
    @Path("/is_logged_in")
    @Consumes(MediaType.TEXT_PLAIN)
    @Produces(MediaType.TEXT_PLAIN)
    public Response isLoggedIn(
            @QueryParam("username") String username) throws RESTException {
        try {
            boolean isLoggedIn = lobby.isLoggedIn(username);
            return Response.ok().entity(isLoggedIn).build();
        } catch (RemoteException e) {
            return Response.serverError().entity(ERROR + e.getMessage()).build();
        }
    }

    @GET
    @Path("/get_user_with_highest_highscore")
    @Produces(MediaType.TEXT_PLAIN)
    public Response getUserWithHighestHighscore() throws RESTException {
        try {
            Bruger user = lobby.getUserWithHighestHighscore();
            return Response.ok().entity(user).build();
        } catch (RemoteException e) {
            return Response.serverError().entity(ERROR + e.getMessage()).build();
        }
    }

    @POST
    @Path("/set_user_highscore")
    @Consumes(MediaType.TEXT_PLAIN)
    @Produces(MediaType.TEXT_PLAIN)
    public Response setUserHighscore(
            @QueryParam("username") String username,
            @QueryParam("highscore") String highscore) throws RESTException {
        try {
            lobby.setUserHighscore(username, highscore);
            return Response.ok().entity(username + ": set highscore: " + highscore).build();
        } catch (RemoteException e) {
            return Response.serverError().entity(ERROR + e.getMessage()).build();
        }
    }

    @GET
    @Path("/get_user_highscore")
    @Consumes(MediaType.TEXT_PLAIN)
    @Produces(MediaType.TEXT_PLAIN)
    public Response getUserHighscore(
            @QueryParam("username") String username) throws RESTException {
        try {
            String highscore = lobby.getUserHighscore(username);
            return Response.ok().entity(highscore).build();
        } catch (RemoteException e) {
            return Response.serverError().entity(ERROR + e.getMessage()).build();
        }
    }

    @GET
    @Path("/get_all_logged_in_users_score")
    @Produces(MediaType.APPLICATION_JSON)
    public Response getAllUsersScore() throws RESTException {
        try {
            Map<String, Integer> userScores = lobby.getAllLoggedInUsersScore();
            return Response.ok().entity(userScores).build();
        } catch (RemoteException e) {
            return Response.serverError().entity(ERROR + e.getMessage()).build();
        }
    }

    @GET
    @Path("/get_all_users_highscore")
    @Produces(MediaType.APPLICATION_JSON)
    public Response getAllUsersHighscore() throws RESTException {
        try {
            Map<String, Integer> userHighScores = lobby.getAllUsersHighscore();

            return Response.ok().entity(userHighScores).build();
        } catch (RemoteException e) {
            return Response.serverError().entity(ERROR + e.getMessage()).build();
        }
    }

    @GET
    @Path("/send_email")
    @Consumes(MediaType.TEXT_PLAIN)
    @Produces(MediaType.TEXT_PLAIN)
    public Response sendUserEmail(
            @QueryParam("username") String username,
            @QueryParam("password") String password,
            @QueryParam("subject") String subject,
            @QueryParam("msg") String msg) throws RESTException {
        try {
            lobby.sendUserEmail(username, password, subject, msg);
            return Response.ok().entity("Sent email to " + username + ". Subject: " + subject + ": msg: " + msg).build();
        } catch (RemoteException e) {
            return Response.serverError().entity(ERROR + e.getMessage()).build();
        }
    }

    @GET
    @Path("/send_forgot_password_email")
    @Consumes(MediaType.TEXT_PLAIN)
    @Produces(MediaType.TEXT_PLAIN)
    public Response sendForgotPasswordEmail(
            @QueryParam("username") String username,
            @QueryParam("msg") String msg) throws RESTException {
        try {
            lobby.sendForgotPasswordEmail(username, msg);
            return Response.ok().entity("Sent forgot password email to: " + username + ": " + msg).build();
        } catch (RemoteException e) {
            return Response.serverError().entity(ERROR + e.getMessage()).build();
        }
    }

    @POST
    @Path("/change_user_password")
    @Consumes(MediaType.TEXT_PLAIN)
    @Produces(MediaType.TEXT_PLAIN)
    public Response changeUserPassword(
            @QueryParam("username") String username,
            @QueryParam("oldPassword") String oldPassword,
            @QueryParam("newPassword") String newPassword) throws RESTException {
        try {
            lobby.changeUserPassword(username, oldPassword, newPassword);
            return Response.ok().entity("Changed password for: " + username).build();
        } catch (RemoteException e) {
            return Response.serverError().entity(ERROR + e.getMessage()).build();
        }
    }

    /*
     * Hangman
     */
    @POST
    @Path("/guess")
    @Produces(MediaType.TEXT_PLAIN)
    public Response guess(
            @QueryParam("username") String username,
            @QueryParam("ch") char ch) throws RESTException {
        try {
            boolean result = lobby.getGameLogicInstance(username).guess(ch);
            return Response.ok().entity(result).build();
        } catch (RemoteException e) {
            return Response.serverError().entity(ERROR + e.getMessage()).build();
        }
    }

    @POST
    @Path("/reset_score")
    @Produces(MediaType.TEXT_PLAIN)
    public Response resetScore(
            @QueryParam("username") String username) throws RESTException {
        try {
            lobby.getGameLogicInstance(username).resetScore();
            return Response.ok().entity("Score reset successfully.").build();
        } catch (RemoteException e) {
            return Response.serverError().entity(ERROR + e.getMessage()).build();
        }
    }

    @POST
    @Path("/reset_game")
    @Produces(MediaType.TEXT_PLAIN)
    public Response resetGame(
            @QueryParam("username") String username) throws RESTException {
        try {
            lobby.getGameLogicInstance(username).resetGame();
            return Response.ok().entity("Game reset successfully.").build();
        } catch (RemoteException e) {
            return Response.serverError().entity(ERROR + e.getMessage()).build();
        }
    }

    @GET
    @Path("/get_guessed_chars")
    @Produces(MediaType.TEXT_PLAIN)
    public Response getGuessedChars(
            @QueryParam("username") String username) throws RESTException {
        try {
            String chars = lobby.getGameLogicInstance(username).getGuessedChars();
            return Response.ok().entity(chars).build();
        } catch (RemoteException e) {
            return Response.serverError().entity(ERROR + e.getMessage()).build();
        }
    }

    @GET
    @Path("/get_word")
    @Produces(MediaType.TEXT_PLAIN)
    public Response getWord(
            @QueryParam("username") String username) throws RESTException {
        try {
            String word = lobby.getGameLogicInstance(username).getWord();
            return Response.ok().entity(word).build();
        } catch (RemoteException e) {
            return Response.serverError().entity(ERROR + e.getMessage()).build();
        }
    }

    @GET
    @Path("/get_life")
    @Produces(MediaType.TEXT_PLAIN)
    public Response getLife(
            @QueryParam("username") String username) throws RESTException {
        try {
            int life = lobby.getGameLogicInstance(username).getLife();
            return Response.ok().entity(life).build();
        } catch (RemoteException e) {
            return Response.serverError().entity(ERROR + e.getMessage()).build();
        }
    }

    @GET
    @Path("/get_score")
    @Produces(MediaType.TEXT_PLAIN)
    public Response getScore(
            @QueryParam("username") String username) throws RESTException {
        try {
            int score = lobby.getGameLogicInstance(username).getScore();
            return Response.ok().entity(score).build();
        } catch (RemoteException e) {
            return Response.serverError().entity(ERROR + e.getMessage()).build();
        }
    }

    @GET
    @Path("/is_char_guessed")
    @Produces(MediaType.TEXT_PLAIN)
    @Consumes(MediaType.TEXT_PLAIN)
    public Response isCharGuessed(
            @QueryParam("username") String username,
            @QueryParam("ch") char ch) throws RESTException {
        try {
            boolean isCharGuessed = getGameLogicInstance(username).isCharGuessed(ch);
            return Response.ok().entity(isCharGuessed).build();
        } catch (RemoteException e) {
            return Response.serverError().entity(ERROR + e.getMessage()).build();
        }
    }

    @GET
    @Path("/is_game_won")
    @Produces(MediaType.TEXT_PLAIN)
    public Response isGameWon(
            @QueryParam("username") String username) throws RESTException {
        try {
            boolean isGameWon = lobby.getGameLogicInstance(username).isGameWon();
            return Response.ok().entity(isGameWon).build();
        } catch (RemoteException e) {
            return Response.serverError().entity(ERROR + e.getMessage()).build();
        }
    }

    @GET
    @Path("/is_game_lost")
    @Produces(MediaType.TEXT_PLAIN)
    public Response isGameLost(
            @QueryParam("username") String username) throws RESTException {
        try {
            boolean isGameLost = lobby.getGameLogicInstance(username).isGameLost();
            return Response.ok().entity(isGameLost).build();
        } catch (RemoteException e) {
            return Response.serverError().entity(ERROR + e.getMessage()).build();
        }
    }

    @GET
    @Path("/is_highscore")
    @Produces(MediaType.TEXT_PLAIN)
    @Consumes(MediaType.TEXT_PLAIN)
    public Response isHighScore(
            @QueryParam("username") String username,
            @QueryParam("password") String password) throws RESTException {
        try {
            boolean isHighscore = lobby.getGameLogicInstance(username).isHighScore(username, password);
            return Response.ok().entity(isHighscore).build();
        } catch (RemoteException e) {
            return Response.serverError().entity(ERROR + e.getMessage()).build();
        }
    }

    @GET
    @Path("/test")
    @Produces(MediaType.TEXT_PLAIN)
    public Response test() throws RESTException {
        StringBuilder sb = new StringBuilder();
        sb.append("#### ").append(getClass().getSimpleName()).append(" REST Test ####\n");
        sb.append("If you see this, the REST GameService seems to be working! :) ¯\\_(ツ)_/¯");
        return Response.ok().entity(sb.toString()).build();
    }

}