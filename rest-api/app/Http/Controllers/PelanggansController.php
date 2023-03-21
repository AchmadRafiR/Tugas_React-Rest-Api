<?php

namespace App\Http\Controllers;

use App\Http\Requests\StorePelangganRequest;
use App\Models\Pelanggans;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

class PelanggansController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data = Pelanggans::all();
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
    public function store(Request $request)
    {
        $data = $request->validate([
            "pelanggan" => "required",
            "alamat" => "required",
            "telp" => "required",
        ]);

        Pelanggans::create($data);
        return response()->json($data);
    }

    /**
     * Display the specified resource.
     */
    public function show($pelanggan)
    {
        $data = Pelanggans::where('idpelanggan', $pelanggan)->get();
        if ($data) {
            return response()->json($data);
        } else {
            return response()->json("Gagal");
        }
        
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Pelanggans $Pelanggans)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(StorePelangganRequest $request, Pelanggans $pelanggans, $pelanggan)
    {
        $coba = Pelanggans::where('idpelanggan', $pelanggan)->update($request->all());
        if ($coba) {
            return response()->json("Berhasil");
        }else {
            return response()->json("Gagal");
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($pelanggan)
    {
        

        $pel = Pelanggans::where('idpelanggan', $pelanggan);
        $pel->delete();
        return response()->json('Hapus Data');
    }
}
