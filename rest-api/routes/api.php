<?php

use App\Http\Controllers\Api\V1\SkillController;
use App\Http\Controllers\KategoriController;
use App\Http\Controllers\OrderdetailController;
use App\Http\Controllers\PelanggansController;
use App\Http\Controllers\ProductsController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::group(['prefix' => 'v1'], function () {
    Route::apiResource('skills', SkillController::class);
    Route::apiResource('products', ProductsController::class);
    Route::apiResource('pelanggan', PelanggansController::class);
    Route::apiResource('categories', KategoriController::class);
    Route::apiResource('orderdetail', OrderdetailController::class);
});
