import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FormBuilder } from '@angular/forms';
import { menuNames } from 'src/app/shared/models/menu-model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss'],
})
export class FormularioComponent implements OnInit {
  menuNames = menuNames;
  petForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.petForm = this.createForm();
  }

  createForm(): FormGroup {
    return this.formBuilder.group({
      personalData: this.formBuilder.group({
        name: [''],
        email: [''],
        nickName: [''],
        date: [''],
        phoneNumber: [''],
        cellNumber: [''],
        cpf: [''],
        socialLink: [''],
        helpOption: [''],
      }),
      address: this.formBuilder.group({
        zipcode: [''],
        address: [{ value: '', disabled: true }],
        number: [''],
        city: [{ value: '', disabled: true }],
        state: [{ value: '', disabled: true }],
      }),
      howToHelp: this.formBuilder.group({
        helpOption: [''],
        petName: [''],
        reason: [''],
        comment: [''],
        reciveNews: [''],
      }),
    });
  }

  async handleCep(): Promise<void> {
    const cep = this.petForm.controls['address'].value.zipcode;
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const data = await response.json();
    const { logradouro, localidade, uf } = data;

    this.petForm.get(['address', 'address'])!.setValue(logradouro);
    this.petForm.get(['address', 'city'])!.setValue(localidade);
    this.petForm.get(['address', 'state'])!.setValue(uf);
  }

  onSubmit() {
    fetch('https://desenvolvimento-web-backend.vercel.app/api/formulario', {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(this.petForm.value),
    })
      .then(function (res) {
        console.log(res);
      })
      .catch(function (res) {
        console.log(res);
      });
  }
}
