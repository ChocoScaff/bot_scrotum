

var m_iRegisterCount = 0;
var m_CCmdRegister = [];
class CCommandSystem
{
	constructor() { }
	
	RegisterCCmd(pszCmdName, pfnFunc)
	{
		console.log("CCommandSystem::RegisterCCmd " + pfnFunc + "_" + pszCmdName);
		
		m_CCmdRegister[m_iRegisterCount] == {};
		m_CCmdRegister[m_iRegisterCount] == { pszCmdName, pfnFunc };
		m_iRegisterCount++;
	}
	
	OnReceiveCommand(pChannel, pszCmd, pszArgs)
	{
		console.log("CCommandSystem::OnReceiveCommand " + pChannel + " " + pszCmd + " " + pszArgs);
		
		for (var i = 0; i < m_iRegisterCount; i++)
		{
			if (m_CCmdRegister[i].pszCmdName === pszCmd)
			{
				m_CCmdRegister[i].pfnFunc(pChannel, pszArgs);
				return;
			}
		}
		
		console.log("CCommandSystem::OnReceiveCommand unknown command : " + pszCmd);
	}
}

const sCmd = new CCommandSystem();
function CmdSys()
{
	return sCmd;
}
