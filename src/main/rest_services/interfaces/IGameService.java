package rest_services.interfaces;

import javax.ws.rs.core.Response;

public interface IGameService {
    /* Lobby */
    Response logIn(String username, String password) throws RESTException;
    Response logOut(String username) throws RESTException;

    Response getAllCurrentUserNames() throws RESTException;
    Response getUserAmount() throws RESTException;
    Response getLoggedInUser(String username) throws RESTException;

    Response isLoggedIn(String username) throws RESTException;
    Response getUserWithHighestHighscore() throws RESTException;
    Response setUserHighscore(String username, String highscore) throws RESTException;
    Response getUserHighscore(String username) throws RESTException;
    Response getAllUsersScore() throws RESTException;
    Response getAllUsersHighscore() throws RESTException;

    Response sendUserEmail(String username, String password, String subject, String msg) throws RESTException;
    Response sendForgotPasswordEmail(String username, String msg) throws RESTException;
    Response changeUserPassword(String username, String oldPassword, String newPassword) throws RESTException;

    /* Hangman */
    Response guess(String username, char ch) throws RESTException;

    Response resetScore(String username) throws RESTException;
    Response resetGame(String username) throws RESTException;

    Response getGuessedChars(String username) throws RESTException;
    Response getWord(String username) throws RESTException;
    Response getLife(String username) throws RESTException;
    Response getScore(String username) throws RESTException;

    Response isCharGuessed(String username, char ch) throws RESTException;
    Response isGameWon(String username) throws RESTException;
    Response isGameLost(String username) throws RESTException;
    Response isHighScore(String username, String password) throws RESTException;

    /* Test */
    Response test() throws RESTException;
}