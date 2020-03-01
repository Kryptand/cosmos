import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ThreadRegionPersistor } from '@kryptand/cosmopatient/thread/domain';

@Component({
  selector: 'kryptand-region',
  templateUrl: './thread-region-container.component.html',
  styleUrls: ['./thread-region-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThreadRegionContainerComponent {
  public fieldConfig = [
    {
      key: 'title',
      type: 'input',
      templateOptions: {
        label: 'Titel',
        placeholder: 'Titel',
        required: true
      }
    },
    {
      key: 'suggestedAmount',
      type: 'input',
      templateOptions: {
        type: 'number',
        label: 'Empfohlene Einheiten',
        placeholder: 'Empfohlene Einheiten',
        required: true
      }
    },
    {
      key: 'id',
      type: 'input',
      templateOptions: {
        type: 'hidden'
      },
      className: 'hidden'
    }
  ];

  constructor(public threadRegionPersistor: ThreadRegionPersistor) {
  }
}
