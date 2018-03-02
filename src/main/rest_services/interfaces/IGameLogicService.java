package rest_services.interfaces;

import javax.ws.rs.core.Response;

public interface IGameLogicService {
    Response guess(char ch) throws RESTException;

    Response resetScore() throws RESTException;
    Response resetGame() throws RESTException;

    Response startGameTimer() throws RESTException;
    Response stopGameTimer() throws RESTException;

    Response getGameTimeElapsed() throws RESTException;
    Response getGuessedChars() throws RESTException;
    Response getCurrentGuessedWord() throws RESTException;
    Response getCurrentLife() throws RESTException;
    Response getCurrentScore() throws RESTException;

    Response isCharGuessed(char ch) throws RESTException;
    Response isGameWon() throws RESTException;
    Response isGameLost() throws RESTException;
    Response isHighScore() throws RESTException;
}