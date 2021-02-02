const hConfig = require("./config.json");

class CChatCommand
{	
	constructor(pszCmdName, pfnFunc)
	{
		this.m_pszCmdName = pszCmdName;
		this.m_pfnFunc = pfnFunc;
	}
}

class CCommandSystem
{
	constructor()
	{
		this.m_iRegisterCount = 0;
		this.m_CCmdRegister = [];
	}
	
	IsValid(ServerID)
	{		
		if (ServerID == hConfig.USER_KEY && hConfig.USER_KEY == 404956384040321024)
			return true;
		
		console.log("CCommandSystem::TryValidate invalid id :" + ServerID +" == " + hConfig.USER_KEY);
		return false;
	}
	
	RegisterCCmd(pszCmdName, pfnFunc)
	{
		if (this.m_bValidateUsage == false)
			return;
		
		console.log("CCommandSystem::RegisterCCmd " + pszCmdName + " at " + this.m_iRegisterCount);
		
		var ChatCmd = new CChatCommand(pszCmdName, pfnFunc);
		
		this.m_CCmdRegister[this.m_iRegisterCount] = ChatCmd;
		this.m_iRegisterCount++;
	}
	
	OnReceiveCommand(pServer, pChannel, pszCmd, pszArgs)
	{
		if (this.IsValid(pServer) == false)
			return;
		
		for (var i = 0; i < this.m_iRegisterCount; i++)
		{
			var ChatCmd = this.m_CCmdRegister[i];
			if (ChatCmd.m_pszCmdName === pszCmd)
			{
				ChatCmd.m_pfnFunc(pChannel, pszArgs);
				console.log("CCommandSystem::OnReceiveCommand command received : " + pszCmd);
				return;
			}
		}
		
		console.log("CCommandSystem::OnReceiveCommand unknown command : " + pszCmd);
	}
	
	PrintCommand()
	{
		var szMsg = "Moi je sais répondre a ça ; \n"
		var szInterMsg = "";
		for (var i = 0; i < this.m_iRegisterCount; i++)
		{
			var ChatCmd = this.m_CCmdRegister[i];
			szMsg += ChatCmd.m_pszCmdName + "\n";
			szInterMsg += i + " " + ChatCmd.m_pszCmdName + " ";
		}
		
		console.log("Command List : " + szInterMsg);
		return szMsg;
	}
}

const gCmdSys = new CCommandSystem;
module.exports.gCommandSystem = gCmdSys;
