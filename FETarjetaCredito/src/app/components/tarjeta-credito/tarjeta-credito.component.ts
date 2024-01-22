import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { TarjetaService } from '../../services/tarjeta.service';
import { error } from 'console';

@Component({
  selector: 'app-tarjeta-credito',
  templateUrl: './tarjeta-credito.component.html',
  styleUrl: './tarjeta-credito.component.css'
})
export class TarjetaCreditoComponent implements OnInit{
  listTarjetas:any[] = [];
  accion = 'Agregar';
  form: FormGroup;
  id: number | undefined;

  constructor (private fb: FormBuilder,
    private toastr: ToastrService,
    private _tarjetaService: TarjetaService) {
    this.form = this.fb.group({
      titular: ['', Validators.required],
      numeroTarjeta: ['', [Validators.required, Validators.maxLength(16), Validators.minLength(16)]],
      fechaExpiracion: ['', [Validators.required, Validators.maxLength(5), Validators.minLength(5)]],
      cvv: ['', [Validators.required, Validators.maxLength(3), Validators.minLength(3)]]
    })
  }

  ngOnInit(): void {
    this.obtenerTarjetas();
  }

  obtenerTarjetas() {
    this._tarjetaService.getListTarjetas().subscribe(data => {
      console.log(data);
      this.listTarjetas = data;
    }, error => {
      console.log(error);
    })
  }

  guardarTarjeta() {

    const tarjeta: any = {
      titular: this.form.get('titular')?.value,
      numeroTarjeta: this.form.get('numeroTarjeta')?.value,
      fechaExpiracion: this.form.get('fechaExpiracion')?.value,
      cvv: this.form.get('cvv')?.value,
    }

      if(this.id == undefined){
        //Agregamos una nueva tarjeta
          this._tarjetaService.saveTarjeta(tarjeta).subscribe(data => {
            this.toastr.success(`La tarjeta ${tarjeta.numeroTarjeta} a nombre de ${tarjeta.titular} fue registrada con éxito!`, 'Tarjeta Registrada!');
            this.obtenerTarjetas();
            this.form.reset();
          }, error => {
            this.toastr.error('Opss.. ocurrion un error','Error')
            console.log(error);
          })
      }else {
        //Editamos tarjeta
        tarjeta.id = this.id;

        this._tarjetaService.updateTarjeta(this.id,tarjeta).subscribe(data =>{
          this.form.reset();
          this.accion = 'Agregar';
          this.id = undefined;
          this.toastr.info('La  tarjeta fue actualizada con exito!','Tarjeta actualizada');
          this.obtenerTarjetas();
        }, error => {
          console.log(error);
        })
      }

      
  }

  eliminarTarjeta(id: number) {
    this._tarjetaService.deleteTarjeta(id).subscribe(data => {
    this.toastr.error(`La tarjeta fue eliminada con éxito!`, 'Tarjeta Eliminada!');
    this.obtenerTarjetas();
    }, error => {
      console.log(error);
    })
    
  }

  editarTarjeta(tarjeta: any) {
    this.accion = 'Editar';
    this.id = tarjeta.id;

    this.form.patchValue({
      titular: tarjeta.titular,
      numeroTarjeta: tarjeta.numeroTarjeta,
      fechaExpiracion: tarjeta.fechaExpiracion,
      cvv: tarjeta.cvv
    })
  }

}
