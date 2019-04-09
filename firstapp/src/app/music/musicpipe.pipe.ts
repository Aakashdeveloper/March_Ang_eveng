import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'musicpipe'
})
export class MusicpipePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
