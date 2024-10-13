import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'highlight',
  standalone: true
})
export class HighlightPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}

  transform(value: string, searchTerm: string): SafeHtml {
    if (!searchTerm) {
      return value; // Return the original string if no search term
    }
    const re = new RegExp(searchTerm, 'gi'); // Case-insensitive search
    const highlighted = value.replace(re, (match) => `<mark>${match}</mark>`); // Wrap the match with <mark>
    return this.sanitizer.bypassSecurityTrustHtml(highlighted); // Trust the HTML
  }
}