<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreProductRequest;
use App\Models\Products;
use Illuminate\Http\Request;

class ProductsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data = Products::all();

        return response()->json($data);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreProductRequest $request)
    {
        $data = Products::create($request->validated());
        return response()->json($data);
    }

    /**
     * Display the specified resource.
     */
    public function show($product)
    {
       $data= Products::where('id', $product)->get();
        
        return response()->json($data);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Products $products)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(StoreProductRequest $request, Products $products, $product)
    {
        $coba = Products::where('id', $product)->update($request->all());
        if ($coba) {
            return response()->json("Berhasil");
        }else {
            return response()->json("Gagal");
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Products $products, $product)
    {
        Products::where('id', $product)->delete();
        return response()->json("product Deleted");
    }
}
