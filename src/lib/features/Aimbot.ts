// import * as app from '.';
 
// export class Aim {
//   private target?: bigint;
//   private targetLockTime = 0;
//   private targetVisibleTime = 0;
 
//   update(core: app.core.Core, localPlayer: app.core.Player, options: IAimOptions) {
//     if (localPlayer.viewAngle.source.syncId) {
//       /* We sent an update, but did not receive confirmation! */
//     } else if (!core.buttonList.inAttack.value && !core.buttonList.inSpeed.value) {
//       this.target = undefined;
//       this.targetLockTime = 0;
//       this.targetVisibleTime = 0;
//     } else if (localPlayer.bleedoutState.value) {
//       this.target = undefined;
//       this.targetLockTime = 0;
//       this.targetVisibleTime = 0;
//     } else if (!this.target) {
//       const target = this.findTarget(core, localPlayer, options);
//       if (!target) return;
//       this.target = target.address;
//       this.targetLockTime = Date.now();
//       this.targetVisibleTime = target.lastVisibleTime.value;
//     } else {
//       const target = core.playerList.get(this.target) ?? core.npcList.get(this.target);
//       if (!target || target.lastVisibleTime.value === this.targetVisibleTime || !this.validate(localPlayer, target)) {
//         this.target = undefined;
//         this.targetLockTime = 0;
//         this.targetVisibleTime = 0;
//       } else {
//         this.aim(localPlayer, target, options);
//         this.targetVisibleTime = target.lastVisibleTime.value;
//       }
//     }
//   }
 
//   private aim(localPlayer: app.core.Player, target: app.core.NPC | app.core.Player, options: IAimOptions) {
//     const vecPunch = localPlayer.vecPunchWeaponAngle.value;
//     const desiredAngle = this.calculateDesiredAngle(localPlayer, target);
//     const desiredVecAngle = new app.core.VectorData(desiredAngle.x - vecPunch.x, desiredAngle.y - vecPunch.y, desiredAngle.z);
//     const smoothPercentage = Math.min((Date.now() - this.targetLockTime) / options.lockTime, 1);
//     const smoothAngle = this.calculateSmoothAngle(localPlayer.viewAngle.value, desiredVecAngle, smoothPercentage, options);
//     localPlayer.viewAngle.delta(smoothAngle);
//   }
 
//   private adjustSelf(localPlayer: app.core.Player) {
//     const localOrigin = localPlayer.localOrigin.value;
//     return localPlayer.duckState.value
//       ? new app.core.VectorData(localOrigin.x, localOrigin.y, localOrigin.z - 27)
//       : new app.core.VectorData(localOrigin.x, localOrigin.y, localOrigin.z);
//   }
  
//   private adjustTarget(target: app.core.NPC | app.core.Player) {
//     const localOrigin = target.localOrigin.value;
//     return target instanceof app.core.Player && target.duckState.value
//       ? new app.core.VectorData(localOrigin.x, localOrigin.y, localOrigin.z - 22)
//       : new app.core.VectorData(localOrigin.x, localOrigin.y, localOrigin.z);
//   }
 
//   private calculateDesiredAngle(localPlayer: app.core.Player, target: app.core.NPC | app.core.Player) {
//     const d = this.adjustTarget(target).subtract(this.adjustSelf(localPlayer));
//     const h = Math.sqrt(d.y * d.y + d.x * d.x);
//     const y = Math.atan2(d.y, d.x) * 180 / Math.PI;
//     const x = Math.atan2(d.z, h) * 180 / Math.PI * -1;
//     return new app.core.VectorData(x, y, 0);
//   }
 
//   private calculateSmoothAngle(currentAngle: app.core.VectorData, desiredAngle: app.core.VectorData, percentage: number, options: IAimOptions) {
//     let dx = currentAngle.x - desiredAngle.x;
//     let dy = currentAngle.y - desiredAngle.y;
//     if (Math.abs(dy) > 180 && currentAngle.y > 0 && desiredAngle.y < 0) dy = dy - 360;
//     if (Math.abs(dy) > 180 && currentAngle.y < 0 && desiredAngle.y > 0) dy = 180 - Math.abs(currentAngle.y) + 180 - Math.abs(desiredAngle.y);
//     let sx = currentAngle.x - dx * percentage * options.maxPitchSpeed;
//     let sy = currentAngle.y - dy * percentage * options.maxYawSpeed;
//     return new app.core.VectorData(sx, sy, 0);
//   }
 
//   private findTarget(core: app.core.Core, localPlayer: app.core.Player, options: IAimOptions) {
//     let bestTarget: app.core.NPC | app.core.Player | undefined;
//     let bestTargetAdjust: number | undefined;
//     for (const target of this.iterateTargets(core)) {
//       if (this.validate(localPlayer, target) && localPlayer.localOrigin.value.distance(target.localOrigin.value) * 0.0254 < options.maxDistance) {
//         const desiredAngle = this.calculateDesiredAngle(localPlayer, target);
//         const desiredAngleDelta = localPlayer.viewAngle.value.subtract(desiredAngle);
//         const desiredPitchAbs = Math.abs(desiredAngleDelta.x);
//         const desiredYawAbs = Math.abs(desiredAngleDelta.y);
//         if (desiredPitchAbs < options.maxPitchAngle && desiredYawAbs < options.maxYawAngle) {
//           const targetAdjust = desiredPitchAbs + desiredYawAbs;
//           if (!bestTargetAdjust || targetAdjust < bestTargetAdjust) {
//             bestTarget = target;
//             bestTargetAdjust = targetAdjust;
//           }
//         }
//       }
//     }
//     return bestTarget;
//   }
 
//   private *iterateTargets(core: app.core.Core) {
//     yield *core.npcList.values();
//     yield *core.playerList.values();
//   }
 
//   private validate(localPlayer: app.core.Player, target: app.core.NPC | app.core.Player) {
//     if (target instanceof app.core.NPC) return true;
//     if (target.isValid && !target.isSameTeam(localPlayer) && !target.bleedoutState.value) return true;
//     return false;
//   }
// }
 
// export type IAimOptions = {
//   lockTime: number,       // 0 ... ?
//   maxDistance: number,    // 0 ... ?
//   maxPitchAngle: number,  // 0 <-> 90
//   maxPitchSpeed: number,  // 0 <-> 1
//   maxYawAngle: number,    // 0 <-> 180
//   maxYawSpeed: number     // 0 <-> 1
// };