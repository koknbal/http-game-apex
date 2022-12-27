export const offsets = {
  button: {
    inSpeed: 0x7642b98,               // [Buttons]                        -> in_speed
    inAttack: 0x7642bd0               // [Buttons]                        -> in_attack
  },
  core: {
    levelName: BigInt(0x1432ac8),     // [Miscellaneous]                  -> LevelName
    clEntityList: BigInt(0x1b0e718),  // [Miscellaneous]                  -> cl_entitylist
    localPlayer: BigInt(0x1ebf528)    // [Miscellaneous]                  -> LocalPlayer
  },
  entity: {
    localOrigin: 0x158,               // [DataMap.CBaseViewModel]         -> m_localOrigin
    iSignifierName: 0x580,            // [RecvTable.DT_BaseEntity]        -> m_iSignifierName
    lastVisibleTime: 0x1690           // [Miscellaneous]                  -> CPlayer!lastVisibleTime
  },
  item: {
    highlightFunctionBits: 0x2c0,     // [RecvTable.DT_HighlightSettings] -> m_highlightFunctionBits
    customScriptInt: 0x1648           // [RecvTable.DT_PropSurvival]      -> m_customScriptInt
  },
  player: {
    glowEnable: 0x3c0 + 0x8,          // [RecvTable.DT_HighlightSettings] -> m_highlightServerContextID + 0x8
    glowThroughWall: 0x3c0 + 0x10,    // [RecvTable.DT_HighlightSettings] -> m_highlightServerContextID + 0x10
    iTeamNum: 0x44c,                  // [RecvTable.DT_BaseEntity]        -> m_iTeamNum
    duckState: 0x2A14,                // m_duckState;
    iName: 0x589,                     // [RecvTable.DT_BaseEntity]        -> m_iName
    lifeState: 0x798,                 // [RecvTable.DT_Player]            -> m_lifeState
    vecPunchWeaponAngle: 0x2488,      // [DataMap.C_Player]               -> m_currentFrameLocalPlayer.m_vecPunchWeapon_Angle
    viewAngle: 0x2584 - 0x14,         // [DataMap.C_Player]               -> m_ammoPoolCapacity - 0x14
    bleedoutState: 0x2718             // [RecvTable.DT_Player]            -> m_bleedoutState
  }
};