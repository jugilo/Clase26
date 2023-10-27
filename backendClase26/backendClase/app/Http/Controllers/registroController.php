<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Models\registro;
use Carbon\Carbon;

class registroController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $registros = registro::all();
        return view('home', ['datos' => $registros]);
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
        $registro = new registro();
            $registro->nombre = $request->nombre;
            $registro->apellido = $request->apellido;
            $registro->edad = $request->edad;
            $registro->cantidadAcompanantes = $request->cantidadAcompanantes;
            $registro->horaIngreso = Carbon::now();
        $registro->save();
        return "Registro guardado correctamente";

    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $registro = registro::find($id);
        $registro->delete();
        return "Registro eliminado correctamente";
    }
}
