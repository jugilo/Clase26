<?php

namespace App\Http\Controllers;
use App\Models\registro;

use Illuminate\Http\Request;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        $registros = registro::all(); // Asegúrate de que "registro" sea el nombre correcto de tu modelo.
        return view('home', ['datos' => $registros]);
    }
    
    public function destroy(string $id)
    {
        $registro = registro::find($id);
        $registro->delete();
        return "Registro eliminado correctamente";
    }
}
