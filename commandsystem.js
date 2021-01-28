

var m_iRegisterCount = -2;
var m_CCmdRegister = [];
class CCommandSystem
{
//public:
	constructor() { }
	
	RegisterCCmd(pCCmd)
	{
		console.log("CCommandSystem::RegisterCCmd " + pCCmd.pfnFunc + "_" + pCCmd.pszCmdName);
		
		m_CCmdRegister[m_iRegisterCount] == {};
		m_CCmdRegister[m_iRegisterCount] == pCCmd;
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
function CmdSys()
{
	return sCmd;
}

var s_iCCObjectCound = 0;
var m_pszCmdName = [];
var m_pfnFunc = [];
class CChatCommand
{
//public:
	constructor(pszCmdName, pfnFunc)
	{
		console.log("CChatCommand::RegisterCCmd " + pfnFunc + "_" + pszCmdName);
		
		m_pszCmdName[s_iCCObjectCound] = pszCmdName;
		m_pfnFunc[s_iCCObjectCound] = pfnFunc;
		
		sCmd.RegisterCCmd(this);
	}
	
//private:
//	m_pszCmdName;
//	m_pfnFunc;
}
