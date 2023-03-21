<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreOrderdetailRequest;
use App\Models\Orderdetail;
use Illuminate\Http\Request;

class OrderdetailController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $orderdetail = Orderdetail::all();
        return response()->json($orderdetail);
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
    public function store(StoreOrderdetailRequest $request)
    {
        $data = $request->validate([
            "idbarang" => "required",
            "jumlah" => "required",
            "harga" => "required",
            "barang" => "required",
            "idpelanggan" => "required",
            "pelanggan" => "required",
            "alamat" => "required",
        ]);

        Orderdetail::create($data);
        return response()->json($data);
    }

    /**
     * Display the specified resource.
     */
    public function show(Orderdetail $orderdetail)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Orderdetail $orderdetail)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Orderdetail $orderdetail)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Orderdetail $orderdetail)
    {
        //
    }
}
