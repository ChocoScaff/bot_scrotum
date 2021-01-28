class CCommandSystem
{
//public:
	constructor()
	{
		this.m_iRegisterCount = 0;
		this.m_CCmdRegister = [];
	}
	
	RegisterCCmd(pCCmd)
	{
		console.log("CCommandSystem::RegisterCCmd " + pCCmd);
		
		this.m_CCmdRegister[this.m_iRegisterCount] == {};
		this.m_CCmdRegister[this.m_iRegisterCount] == pCCmd;
		this.m_iRegisterCount++;
	}
	
	OnReceiveCommand(pChannel, pszCmd, pszArgs)
	{
		console.log("CCommandSystem::OnReceiveCommand " + pChannel + " " + pszCmd + " " + pszArgs);
		
		for (var i = 0; i < this.m_iRegisterCount; i++)
		{
			if (this.m_CCmdRegister[i].m_pszCmdName === pszCmd)
			{
				this.m_CCmdRegister[i].m_pfnFunc(pChannel, pszArgs);
				return;
			}
		}
		
		console.log("CCommandSystem::OnReceiveCommand unknown command : " + pszCmd);
	}
	
//private:
//	m_iRegisterCount;
//	m_CCmdRegister;
}

new CCommandSystem().m_iRegisterCount = 0;
new CCommandSystem().m_CCmdRegister = [];

const sCmd = new CCommandSystem();
function CmdSys()
{
	return sCmd;
}

class CChatCommand
{
//public:
	constructor(pszCmdName, pfnFunc)
	{
		console.log("CChatCommand::RegisterCCmd " + pfnFunc + "_" + pszCmdName);
		
		this.m_pszCmdName = pszCmdName;
		this.m_pfnFunc = pfnFunc;
		
		sCmd.RegisterCCmd(this);
	}
	
//private:
//	m_pszCmdName;
//	m_pfnFunc;
}


new CChatCommand().m_pszCmdName = 0;
new CChatCommand().m_pfnFunc = 0;
