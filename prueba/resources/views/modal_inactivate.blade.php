<div class="modal fade modal-inactivate" tabindex="-1" role="dialog" aria-labelledby="myExtraLargeModalLabel" aria-hidden="true">
    <div class="modal-dialog largo" role="document">
        <div class="modal-content mx-0">
            <div class="modal-header bg-light">
                <h5 class="modal-title titulo-modal" id="exampleModalCenterTitle">Inactivar Registro</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>                                
            </div>
​
            <div class="modal-body px-5">
                <form method="POST"  id="form-inactivate">
                    @csrf
                    <div class="form-group">
                       <h3>¿Está Seguro de Inactivar el Registro?</h3>
                       <p>
                            Al  inactivar el registro ya no podra usarlo dentro del software. <br/> 
                            Pero se conservara el historico para los informes y asegurar la calidad de la información.
                       </p>
                       <input type="hidden" id="id-inactivate" name="id" >
                    </div>
                    <div class="modal-footer">
                        <button  type="button" class="btn btn-large custom-file-upload" data-dismiss="modal">Cancelar</button>  
                        <button  type="submit" class="btn btn-large custom-file-upload">Inactivar</button>                    
                    </div>
                </form>
            </div>
​
        </div>
    </div>
</div>