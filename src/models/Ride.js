module.exports = class Ride {

  /**
   *
   * @param id
   * @param startPositionX
   * @param startPositionY
   * @param endPositionX
   * @param endPositionY
   * @param earliestStart
   * @param latestFinish
   */
  constructor(id, startPositionX, startPositionY, endPositionX, endPositionY, earliestStart, latestFinish) {
    this.id = id;
    this.startPositionX = startPositionX;
    this.startPositionY = startPositionY;
    this.endPositionX = endPositionX;
    this.endPositionY = endPositionY;
    this.earliestStart = earliestStart;
    this.latestFinish = latestFinish;
  }

  get steps() {
    return Math.abs(this.endPositionX - this.startPositionX) + Math.abs(this.endPositionY - this.startPositionY);
  }

  get scoring(vehicle, currentSimulationStep, timeBonus) {
    let steps = this.steps();
    let timeB = timeBonus;
    // let 
  }

  distanceToMe(myX, myY) {
    return Math.abs(myX - this.startPositionX) + Math.abs(myY - this.startPositionY);
  }

};
