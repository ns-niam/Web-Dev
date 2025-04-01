from django.urls import path

from . import views

urlpatterns = [
    path("products", views.product_list),
    path("products/<int:id>", views.product_by_id),
    path("categories", views.categories),
    path("categories/<int:id>", views.category_by_id),
    path("categories/<int:id>/products", views.products_by_category),
]
    
