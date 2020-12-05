<template>
    <div class="col-md-6">
        <div class="card">
            <div class="card-header">
                <h3 class="card-title">Menu Pesanan</h3>
            </div>
            <div class="card-body">
                <div class="table-responsive">
                    <table class="table table-hower table-bordered">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Menu</th>
                                <th>Jumlah</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <!-- MEAKUKAN LOOPING DARI COMPUTED PROPERTY AGENDA-->
                            <tr v-for="(row, index) in agenda" :key="index">
                                <td>{{ index+1 }}</td>
                                <td>{{ row.hari }}</td>
                                <td>{{ row.kegiatan }}</td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'AgendaShow',
    computed: {
        //MEMBUAT COMPUTED agenda()
        agenda() {
            //YANG BERISI DATA DARI state listAgenda
            return this.$store.state.listAgenda
        }
    }
}
</script>