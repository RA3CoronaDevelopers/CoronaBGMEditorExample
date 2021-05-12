declare namespace CoronaBGMEditorConfig {
  interface IMain {
    musicFiles: {
      [name: string]: string
    },
    unitWeight: {
      "AlliedScoutInfantry": number,
      "AlliedAntiInfantryInfantry": number,
      "AlliedAntiVehicleInfantry": number,
      "AlliedEngineer": number,
      "AlliedInfiltrationInfantry": number,
      "AlliedCommandoTech1": number,
      "AlliedMiner": number,
      "AlliedAntiInfantryVehicle": number,
      "AlliedAntiAirVehicleTech1": number,
      "AlliedAntiVehicleVehicleTech1": number,
      "AlliedAntiStructureVehicle": number,
      "AlliedAntiVehicleVehicleTech3": number,
      "AlliedMCV": number,
      "AlliedAntiGroundAircraft": number,
      "AlliedFighterAircraft": number,
      "AlliedSupportAircraft": number,
      "AlliedBomberAircraft": number,
      "AlliedSupersonicBomber": number,
      "AlliedAntiNavalScout": number,
      "AlliedAntiAirShip": number,
      "AlliedAntiNavyShipTech1": number,
      "AlliedAntiStructureShip": number,
      "AlliedConstructionYard": number,
      "AlliedOutPost": number,
      "AlliedPowerPlant": number,
      "AlliedBarracks": 500,
      "AlliedRefinery": number,
      "AlliedWarFactory": number,
      "AlliedNavalYard": number,
      "AlliedAirfield": number,
      "AlliedTechStructure": number,
      "AlliedWallPiece": number,
      "AlliedWallSegmentPiece": number,
      "AlliedBaseDefense": number,
      "AlliedBaseDefenseAdvanced": number,
      "AlliedSuperWeapon": number,
      "AlliedSuperWeaponAdvanced": number
    },
    fsmConfig: {
      interval: number,
      fightThreshold: number,
      advantageThreshold: number,
      disadvantageThreshold: number
    }
    tracks: ITrack[]
  }

  interface ITrack {
    id: string,
    musicId: string,
    startOffset: number,
    length: number,
    beatsPerMinutes: number,
    beatsPerBar: number,
    checkPoints?: ICheckPoint[],
    defaultCheckPoints?: IDefaultCheckPoint[]
  }

  interface ICheckPoint {
    time: number,
    destinations?: IDestination[]
    defaultDestinations?: IDefaultDestination[]
  }

  interface IDefaultCheckPoint {
    condition: string,
    jumpTo: IJumpTo[]
  }

  interface IDestination {
    condition: string,
    jumpTo: IJumpTo[]
  }

  interface IDefaultDestination {
    jumpTo: IJumpTo[]
  }

  interface IJumpTo {
    targetTrackId: string,
    targetOffset: number,
    fadeOutDelay: number,
    fadeOutDuration: number,
    targetFadeInDelay: number,
    targetFadeInDuration: number
  }
}
