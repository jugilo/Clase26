@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">REGISTROS</div>

                <div class="card-body">
                    @if (session('status'))
                        <div class="alert alert-success" role="alert">
                            {{ session('status') }}
                        </div>
                    @endif
                
                    <br>
                    @foreach ($datos as $registro)
                        <div>
                            {{ 'Nombre: ' . $registro->nombre }}
                            <br>
                            {{ 'Apellido: ' . $registro->apellido }}
                            <br>
                            {{ 'Edad: ' . $registro->edad }}
                            <br>
                            {{ 'Cantidad de Acompañantes: ' . $registro->cantidadAcompanantes }}
                            <br>
                            {{ 'Hora de Ingreso: ' . $registro->horaIngreso }}
                            <br>
                            <form method="POST" action="{{ route('eliminarRegistro', $registro->id) }}">
                                @csrf
                                @method('DELETE')
                                <button type="submit" class="btn btn-danger">Eliminar</button>
                            </form>
                        </div>
                        <hr>
                    @endforeach
                </div>
            </div>
        </div>
    </div>
</div>
@endsection

