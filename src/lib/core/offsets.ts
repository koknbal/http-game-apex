export const offsets = {
  button: {
    inSpeed: 0x07642b98,               // [Buttons]                        -> in_speed
    inAttack: 0x07642bd0               // [Buttons]                        -> in_attack
  },
  core: {
    levelName: BigInt(0x1432ac8),     // [Miscellaneous]                  -> LevelName
    clEntityList: BigInt(0x1b0e718),  // [Miscellaneous]                  -> cl_entitylist
    localPlayer: BigInt(0x1ebf528)    // [Miscellaneous]                  -> LocalPlayer
  },
  entity: {
    localOrigin: 0x0004,               // [DataMap.CBaseViewModel]         -> m_localOrigin
    iSignifierName: 0x0580,            // [RecvTable.DT_BaseEntity]        -> m_iSignifierName
    lastVisibleTime: 0x1a70           // [Miscellaneous]                  -> CPlayer!lastVisibleTime
  },
  item: {
    highlightFunctionBits: 0x02c0,     // [RecvTable.DT_HighlightSettings] -> m_highlightFunctionBits
    customScriptInt: 0x1648           // [RecvTable.DT_PropSurvival]      -> m_customScriptInt
  },
  player: {
    glowEnable: 0x03c0,                // [RecvTable.DT_HighlightSettings] -> m_highlightServerContextID + 0x8
    glowThroughWall: 0x03c0,           // [RecvTable.DT_HighlightSettings] -> m_highlightServerContextID + 0x10
    iTeamNum: 0x044c,                  // [RecvTable.DT_BaseEntity]        -> m_iTeamNum
    iName: 0x0589,                     // [RecvTable.DT_BaseEntity]        -> m_iName
    lifeState: 0x0798,                 // [RecvTable.DT_Player]            -> m_lifeState
    vecPunchWeaponAngle: 0x2488,      // [DataMap.C_Player]               -> m_currentFrameLocalPlayer.m_vecPunchWeapon_Angle
    viewAngle: 0x2584,                // [DataMap.C_Player]               -> m_ammoPoolCapacity - 0x14
    bleedoutState: 0x2718             // [RecvTable.DT_Player]            -> m_bleedoutState
  }
};