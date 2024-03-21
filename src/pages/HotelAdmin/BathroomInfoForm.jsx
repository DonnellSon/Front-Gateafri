import { Field, ErrorMessage } from 'formik';
const BathroomInfoForm = ()=>{
    return(
        <div className="bathroom-info">
            <div className="form-group">
                <label htmlFor="">Equipements disponibles</label>
                <div className="form-group grid" role="group" aria-labelledby="checkbox-group">
                <div>
                    <label className="flex align-items-center gap-5">
                        <Field type="checkbox" name="hotelEquipments" value="Rétaurant" />
                        <span>Rétaurant</span>
                    </label>
                </div>
                <div>
                    <label className="flex align-items-center gap-5">
                        <Field type="checkbox" name="hotelEquipments" value="Service d'étage" />
                        <span>Service d'étage</span>
                    </label>
                </div>
                <div>
                    <label className="flex align-items-center gap-5">
                        <Field type="checkbox" name="hotelEquipments" value="1" />
                        <span>Réception 24h/7</span>
                    </label>
                </div>
                <div>
                    <label className="flex align-items-center gap-5">
                        <Field type="checkbox" name="hotelEquipments" value="2" />
                        <span>Centre de remise en forme</span>
                    </label>
                </div>
                <div>
                    <label className="flex align-items-center gap-5">
                        <Field type="checkbox" name="hotelEquipments" value="3" />
                        <span>Sauna</span>
                    </label>
                </div>
                <div>
                    <label className="flex align-items-center gap-5">
                        <Field type="checkbox" name="hotelEquipments" value="4" />
                        <span>Jardin</span>
                    </label>
                </div>
                <div>
                    <label className="flex align-items-center gap-5">
                        <Field type="checkbox" name="hotelEquipments" value="5" />
                        <span>Bar</span>
                    </label>
                </div>
                <div>
                    <label className="flex align-items-center gap-5">
                        <Field type="checkbox" name="hotelEquipments" value="6" />
                        <span>Terrasse</span>
                    </label>
                </div>
                <div>
                    <label className="flex align-items-center gap-5">
                        <Field type="checkbox" name="hotelEquipments" value="7" />
                        <span>Chambre non fumeur</span>
                    </label>
                </div>
                <div>
                    <label className="flex align-items-center gap-5">
                        <Field type="checkbox" name="hotelEquipments" value="8" />
                        <span>Navette aéroport</span>
                    </label>
                </div>
                <div>
                    <label className="flex align-items-center gap-5">
                        <Field type="checkbox" name="hotelEquipments" value="9" />
                        <span>Piscine</span>
                    </label>
                </div>
                <div>
                    <label className="flex align-items-center gap-5">
                        <Field type="checkbox" name="hotelEquipments" value="10" />
                        <span>Wifi</span>
                    </label>
                </div>
                <label className="flex align-items-center gap-5">
                    <Field type="checkbox" name="hotelEquipments" value="11" />
                    <span>Borne de recharge pour voiture éléctrique</span>
                </label>
                <div>
                    <label className="flex align-items-center gap-5">
                        <Field type="checkbox" name="hotelEquipments" value="12" />
                        <span>Spa</span>
                    </label>
                </div>
                <div>
                    <label className="flex align-items-center gap-5">
                        <Field type="checkbox" name="hotelEquipments" value="13" />
                        <span>Wifi</span>
                    </label>
                </div>
                <div>
                    <label className="flex align-items-center gap-5">
                        <Field type="checkbox" name="hotelEquipments" value="14" />
                        <span>Climatiseur</span>
                    </label>
                </div>
                <div>
                    <label className="flex align-items-center gap-5">
                        <Field type="checkbox" name="hotelEquipments" value="15" />
                        <span>Plage</span>
                    </label>
                </div>
            </div>
            </div>
        </div>
    )
}

export default BathroomInfoForm