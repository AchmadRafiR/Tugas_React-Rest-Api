<?php

namespace App\Http\Controllers;

use App\Models\Kategori;
use Illuminate\Http\Request;

class KategoriController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $categories = Kategori::all();
        return response()->json($categories);
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
    public function store(Request $request)
    {
        $data = $request->validate([
            "kategori" => "required",
        ]);

        Kategori::create($data);
        return response()->json("Sukses");
    }

    /**
     * Display the specified resource.
     */
    public function show( $category)
    {
        $data = Kategori::where('idkategori', $category)->get();
        return response()->json($data);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Kategori $kategori)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $category)
    {
        $data = $request->validate([
            "kategori" => "required"
        ]);

        $kat = Kategori::where('idkategori', $category)->update($request->all());
        return response()->json($data);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy( $category)
    {
        Kategori::where('idkategori', $category)->delete();
        return response()->json("sukses");
    }
}
