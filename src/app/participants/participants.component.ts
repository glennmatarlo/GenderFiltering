import { templateJitUrl } from '@angular/compiler';
import { Component } from '@angular/core';
import { ParticipantsService } from './participants.service';

@Component({
  selector: 'participants',
  templateUrl: './participants.component.html',
  styleUrls: ['./participants.component.css']
})
export class ParticipantsComponent {
  participants;
  view;

  constructor (service: ParticipantsService){
    this.view = this.participants = service.getParticipants()
  }
  filterGender(gender: string){
    this.view = this.participants.filter(participant => participant.gender === gender)
  }
  showAll(){
    this.view = this.participants
  }
}
