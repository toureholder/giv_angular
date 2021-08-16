import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ImgageGridItem } from '@shared/components/image-grid/image-grid.component';
import { Listing } from '@shared/models/listing/listing.model';
import { User } from '@shared/models/user/user.model';
import { Observable, OperatorFunction } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserService } from 'src/app/core/services/business/user/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
})
export class UserDetailComponent implements OnInit {
  listings?: Listing[];
  user?: User;
  imageGridItems?: ImgageGridItem[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.getUserId().subscribe((id) => {
      this.userService.getListingsByUserId(id)?.subscribe((val: Listing[]) => {
        this.listings = val;
        this.user = val[0].user;
        this.defineGridItems(val);
      });
    });
  }

  private getUserId(): Observable<number> {
    return this.activatedRoute.params.pipe(
      map((params) => {
        return params.id;
      })
    );
  }

  private defineGridItems(listings: Listing[]) {
    this.imageGridItems = listings.map((val) => {
      return { image: val.toImageData(), title: val.title };
    });
  }
}
