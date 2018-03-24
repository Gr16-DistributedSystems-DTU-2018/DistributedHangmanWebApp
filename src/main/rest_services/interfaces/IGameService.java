package rest_services.interfaces;

import server.logic.rmi.IGameLogic;

import javax.ws.rs.core.Response;

public interface IGameService {
    /* Lobby */
    Response logIn(String username, String password) throws RESTException;
    Response logOut(String username) throws RESTException;

    IGameLogic getGameLogicInstance(String username) throws RESTException;
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
    Response guess(char ch) throws RESTException;

    Response resetScore() throws RESTException;
    Response resetGame() throws RESTException;

    Response getGuessedChars() throws RESTException;
    Response getWord() throws RESTException;
    Response getLife() throws RESTException;
    Response getScore() throws RESTException;

    Response isCharGuessed(char ch) throws RESTException;
    Response isGameWon() throws RESTException;
    Response isGameLost() throws RESTException;
    Response isHighScore(String username, String password) throws RESTException;

    /* Test */
    Response test() throws RESTException;
}