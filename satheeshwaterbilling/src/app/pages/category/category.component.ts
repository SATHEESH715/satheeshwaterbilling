
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoryService } from '../../services/category.service';
import { Category } from '../../models/category.model';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categories: Category[] = [];
  categoryForm: FormGroup;
  editingId: string | null = null;
  loading = false;
  error: string | null = null;

  constructor(
    private fb: FormBuilder,
    private categoryService: CategoryService
  ) {
    this.categoryForm = this.fb.group({
      name: ['', Validators.required],
      description: [''],
      price: [0, [Validators.required, Validators.min(0)]],
      stock: [0, [Validators.required, Validators.min(0)]],
      imageUrl: ['']
    });
  }

  ngOnInit() {
    this.loadCategories();
  }

  loadCategories() {
    this.categoryService.getAll().subscribe({
      next: (data) => this.categories = data,
      error: () => this.categories = []
    });
  }

  onSubmit() {
    if (this.categoryForm.invalid) return;
    this.loading = true;
    this.error = null;
    const formValue = this.categoryForm.value;
    if (this.editingId) {
      this.categoryService.update(this.editingId, formValue).subscribe({
        next: () => {
          this.loadCategories();
          this.cancelEdit();
        },
        error: (err) => {
          this.error = err.error?.message || 'Update failed';
          this.loading = false;
        },
        complete: () => this.loading = false
      });
    } else {
      this.categoryService.create(formValue).subscribe({
        next: () => {
          this.loadCategories();
          this.categoryForm.reset();
        },
        error: (err) => {
          this.error = err.error?.message || 'Create failed';
          this.loading = false;
        },
        complete: () => this.loading = false
      });
    }
  }

  editCategory(cat: Category) {
    this.editingId = cat.id;
    this.categoryForm.patchValue(cat);
  }

  cancelEdit() {
    this.editingId = null;
    this.categoryForm.reset();
  }

  deleteCategory(id: string) {
    if (!confirm('Delete this category?')) return;
    this.categoryService.delete(id).subscribe({
      next: () => this.loadCategories(),
      error: () => {}
    });
  }
}
