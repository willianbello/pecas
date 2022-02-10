import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Ano } from '../shared/models/ano';
import { Modelo } from '../shared/models/modelo';
import { Moto } from '../shared/models/moto';
import { DatabaseService } from '../shared/services/database/database.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    filtroFormGroup: FormGroup;
    motos: Moto[];

    motoSelecionada: Moto | undefined;
    modeloSelecionado: Modelo | undefined;
    anoSelecionado: Ano | undefined;

    constructor(
        private fb: FormBuilder,
        private databaseService: DatabaseService,
    ) {
        this.getDataBase();
    }

    ngOnInit(): void {
        this.loadFiltroForm();
    }

    loadFiltroForm() {
        this.filtroFormGroup = this.fb.group({
            fabricante: ['', [Validators.required]],
            modelo: ['', [Validators.required]],
            ano: ['', []],
        });
    }

    limparFiltros() {
        this.filtroFormGroup.reset();
        this.motoSelecionada = undefined;
        this.modeloSelecionado = undefined;
        this.anoSelecionado = undefined;
    }

    getDataBase() {
        this.databaseService
            .getDataBaseJson()
            .subscribe((motos: Moto[]) => {
                if (motos) this.motos = motos;
            });
    }

    onSelectMoto(moto: Moto) {
        this.motoSelecionada = moto;
        this.modeloSelecionado = undefined;
        this.anoSelecionado = undefined;

        if (this.motoSelecionada.modelos.length == 1) {
            this.modeloSelecionado = moto.modelos[0];
            this.filtroFormGroup.patchValue({ modelo: moto.modelos[0].nome });
        }
    }

    onSelectModelo(modelo: Modelo) {
        this.modeloSelecionado = modelo;
        this.anoSelecionado = undefined;

        if (modelo.anos.length == 1) {
            this.filtroFormGroup.patchValue({ ano: modelo.anos[0].ano });
            this.anoSelecionado = modelo.anos[0];
        }
    }

    onSelectAno(ano: Ano) {
        this.anoSelecionado = ano;
    }

}
