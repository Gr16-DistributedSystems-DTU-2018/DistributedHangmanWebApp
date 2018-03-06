package rest_services;

import rest_services.interfaces.IGameLogicService;
import rest_services.interfaces.RESTException;
import server.logic.rmi.IGameLogic;
import server.util.Utils;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.rmi.Naming;
import java.rmi.RemoteException;

@Path("/logic")
public final class GameLogicService implements IGameLogicService {

    private IGameLogic logic;
    private final String ERROR = "Error occurred!";

    public GameLogicService() throws Exception {
        logic = (IGameLogic) Naming.lookup(Utils.RMI_STUB_URL_REMOTE_LOGIC_JAVABOG);
    }

    @POST
    @Path("/guess")
    @Produces(MediaType.TEXT_PLAIN)
    public Response guess(@QueryParam("ch") char ch) throws RESTException {
        try {
            boolean result = logic.guess(ch);
            return Response.ok().entity(result).build();
        } catch (RemoteException e) {
            return Response.serverError().entity(ERROR).build();
        }
    }

    @POST
    @Path("/reset_score")
    @Produces(MediaType.TEXT_PLAIN)
    public Response resetScore() throws RESTException {
        try {
            logic.resetScore();
            return Response.ok().entity("Score reset successfully.").build();
        } catch (RemoteException e) {
            return Response.serverError().entity(ERROR).build();
        }
    }

    @POST
    @Path("/reset_game")
    @Produces(MediaType.TEXT_PLAIN)
    public Response resetGame() throws RESTException {
        try {
            logic.resetGame();
            return Response.ok().entity("Game reset successfully.").build();
        } catch (RemoteException e) {
            return Response.serverError().entity(ERROR).build();
        }
    }

    @POST
    @Path("/start_timer")
    @Produces(MediaType.TEXT_PLAIN)
    public Response startGameTimer() throws RESTException {
        try {
            logic.startGameTimer();
            return Response.ok().entity("Timer started successfully.").build();
        } catch (RemoteException e) {
            return Response.serverError().entity(ERROR).build();
        }
    }

    @POST
    @Path("/stop_timer")
    @Produces(MediaType.TEXT_PLAIN)
    public Response stopGameTimer() throws RESTException {
        try {
            logic.stopGameTimer();
            return Response.ok().entity("Timer stopped successfully.").build();
        } catch (RemoteException e) {
            return Response.serverError().entity(ERROR).build();
        }
    }

    @GET
    @Path("/get_time")
    @Produces(MediaType.TEXT_PLAIN)
    public Response getGameTimeElapsed() throws RESTException {
        try {
            int time = logic.getGameTimeElapsed();
            return Response.ok().entity(time).build();
        } catch (RemoteException e) {
            return Response.serverError().entity(ERROR).build();
        }
    }

    @GET
    @Path("/get_guessed_chars")
    @Produces(MediaType.TEXT_PLAIN)
    public Response getGuessedChars() throws RESTException {
        try {
            String chars = logic.getGuessedChars();
            return Response.ok().entity(chars).build();
        } catch (RemoteException e) {
            return Response.serverError().entity(ERROR).build();
        }
    }

    @GET
    @Path("/get_guessed_word")
    @Produces(MediaType.TEXT_PLAIN)
    public Response getCurrentGuessedWord() throws RESTException {
        try {
            String word = logic.getCurrentGuessedWord();
            return Response.ok().entity(word).build();
        } catch (RemoteException e) {
            return Response.serverError().entity(ERROR).build();
        }
    }

    @GET
    @Path("/get_life")
    @Produces(MediaType.TEXT_PLAIN)
    public Response getCurrentLife() throws RESTException {
        try {
            int life = logic.getCurrentLife();
            return Response.ok().entity(life).build();
        } catch (RemoteException e) {
            return Response.serverError().entity(ERROR).build();
        }
    }

    @GET
    @Path("/get_score")
    @Produces(MediaType.TEXT_PLAIN)
    public Response getCurrentScore() throws RESTException {
        try {
            int score = logic.getCurrentScore();
            return Response.ok().entity(score).build();
        } catch (RemoteException e) {
            return Response.serverError().entity(ERROR).build();
        }
    }

    @GET
    @Path("/is_char_guessed")
    @Produces(MediaType.TEXT_PLAIN)
    public Response isCharGuessed(@QueryParam("ch") char ch) throws RESTException {
        try {
            boolean isCharGuessed = logic.isCharGuessed(ch);
            return Response.ok().entity(isCharGuessed).build();
        } catch (RemoteException e) {
            return Response.serverError().entity(ERROR).build();
        }
    }

    @GET
    @Path("/is_game_won")
    @Produces(MediaType.TEXT_PLAIN)
    public Response isGameWon() throws RESTException {
        try {
            boolean isGameWon = logic.isGameWon();
            return Response.ok().entity(isGameWon).build();
        } catch (RemoteException e) {
            return Response.serverError().entity(ERROR).build();
        }
    }

    @GET
    @Path("/is_game_lost")
    @Produces(MediaType.TEXT_PLAIN)
    public Response isGameLost() throws RESTException {
        try {
            boolean isGameLost = logic.isGameLost();
            return Response.ok().entity(isGameLost).build();
        } catch (RemoteException e) {
            return Response.serverError().entity(ERROR).build();
        }
    }

    @GET
    @Path("/is_highscore")
    @Produces(MediaType.TEXT_PLAIN)
    public Response isHighScore() throws RESTException {
        try {
            boolean isHighscore = logic.isHighScore();
            return Response.ok().entity(isHighscore).build();
        } catch (RemoteException e) {
            return Response.serverError().entity(ERROR).build();
        }
    }

    @GET
    @Produces(MediaType.TEXT_PLAIN)
    @Path("/test")
    public String getTest() {
        return "GameLogic test working! :)";
    }

}