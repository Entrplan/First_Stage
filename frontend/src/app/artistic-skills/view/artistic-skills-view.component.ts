import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArtisticSkillsModel } from 'src/app/artistic-skills/artistic-skills-model';
import { ArtisticSkillsViewService } from 'src/app/artistic-skills/view/artistic-skills-view.service';
import { i18n } from 'src/i18n';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-artistic-skills-view',
  templateUrl: './artistic-skills-view.component.html',
})
export class ArtisticSkillsViewComponent implements OnInit {
  constructor(
    private service: ArtisticSkillsViewService,
    private route: ActivatedRoute,
    private authService: AuthService,
  ) {}

  async ngOnInit() {
    await this.service.doFind(
      this.route.snapshot.paramMap.get('id'),
    );
  }

  presenter(row, fieldName) {
    return ArtisticSkillsModel.presenter(row, fieldName);
  }

  get fields() {
    return ArtisticSkillsModel.fields;
  }

  get loading() {
    return this.service.loading;
  }

  get record() {
    return this.service.record;
  }

  breadcrumb = [
    [i18n('dashboard.menu'), '/'],
    [i18n('entities.artisticSkills.menu'), '/artistic-skills'],
    [i18n('entities.artisticSkills.view.title')],
  ];
}
