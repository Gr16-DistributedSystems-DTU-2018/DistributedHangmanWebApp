package io.inabsentia.rest;

import io.inabsentia.gameserver.logic.rmi.IGameLogic;
import io.inabsentia.gameserver.util.Utils;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import java.rmi.Naming;

@Path("/auth")
public final class UserAuthentication {

    private final IGameLogic logic;

    public UserAuthentication() throws Exception {
        logic = (IGameLogic) Naming.lookup(Utils.RMI_STUB_URL_REMOTE_LOGIC_JAVABOG);
    }

    @GET
    @Produces(MediaType.TEXT_PLAIN)
    @Path("/test")
    public String getTest() {
        return "UserAuthentication module test!";
    }

}