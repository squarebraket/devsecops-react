import { FrequentFlyerModelInterface } from '../interface/frequent-flyer-model-interface';
import { FrequentFlyerDtoInterface } from '../interface/frequent-flyer-dto-interface';
import { FrequentFlyerModel } from '../model/frequent-flyer-model';

export class FrequentFlyerClubService {
  ffClub:Array<FrequentFlyerModelInterface> = [];

  addToClub(newMember: FrequentFlyerDtoInterface) {
    const nm = new FrequentFlyerModel(newMember.firstName, newMember.lastName);

    this.ffClub.push(nm);

    return this.ffClub.length - 1;
  }

  listMembers():Array<FrequentFlyerModelInterface> {
    return this.ffClub;
  }

  getMemberDetails(id: number): FrequentFlyerModel {
    const m = this.ffClub[id];

    if (m) {
      return m;
    } else {
      return {
        lastName: '',
        firstName: '',
        status: '',
        points: -1,
      };
    }
  }
}
