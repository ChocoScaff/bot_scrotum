class CCommandSystem
{
//public:
	constructor()
	{
		m_iRegisterCount = 0;
		m_CCmdRegister = [];
	}
	
	RegisterCCmd(pCCmd)
	{
		console.log("CCommandSystem::RegisterCCmd " + pCCmd);
		
		m_CCmdRegister[m_iRegisterCount] = {};
		m_CCmdRegister[m_iRegisterCount] = pCCmd;
		m_iRegisterCount++;
	}
	
	OnReceiveCommand(pChannel, pszCmd, pszArgs)
	{
		console.log("CCommandSystem::OnReceiveCommand " + pChannel + " " + pszCmd + " " + pszArgs);
		
		for (var i = 0; i < m_iRegisterCount; i++)
		{
			if (m_CCmdRegister[i].m_pszCmdName === pszCmd)
			{
				m_CCmdRegister[i].m_pfnFunc(pChannel, pszArgs);
				return;
			}
		}
		
		console.log("CCommandSystem::OnReceiveCommand unknown command : " + pszCmd);
	}
	
//private:
//	m_iRegisterCount;
//	m_CCmdRegister;
}

const sCmd = new CCommandSystem();

class CChatCommand
{
//public:
	constructor(pszCmdName, pfnFunc)
	{
		console.log("CChatCommand::RegisterCCmd " + pfnFunc + "_" + pszCmdName);
		
		m_pszCmdName = pszCmdName;
		m_pfnFunc = pfnFunc;
		
		sCmd.RegisterCCmd(this);
	}
	
//private:
//	m_pszCmdName;
//	m_pfnFunc;
}
