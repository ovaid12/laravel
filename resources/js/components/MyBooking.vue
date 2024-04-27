<template>
    <v-form v-model="valid" @submit.prevent>
        <v-container>
            <v-row>
                <v-col cols="12" md="6">
                    <v-autocomplete v-bind="from" label="From"
                        :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']" variant="solo">
                    </v-autocomplete>
                </v-col>

                <v-col cols="12" md="6">
                    <v-autocomplete v-bind="to" label="To"
                        :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']" variant="solo">
                    </v-autocomplete>
                </v-col>
            </v-row>
            <v-btn class="me-4" type="submit" color="primary">Submit</v-btn>
        </v-container>
    </v-form>
    <v-container>
        <v-row>
            <v-col cols="12">
                <v-card class="mx-auto">
                    <v-card-title>
                        <v-avatar color="info">
                            <v-icon icon="mdi-account-circle"></v-icon>
                        </v-avatar>
                        Driver Name
                    </v-card-title>
                    <v-card-text>Lorem ipsum 5</v-card-text>
                    <v-card-actions>
                        <v-btn variant="flat" color="success">Book Now</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>




</template>
<script>
export default {
    data: () => ({
        valid: false,
        from: '',
        to: '',
        FromRules: [
            value => {
                if (value) return true

                return 'From is required.'
            }
        ],
        email: '',
        emailRules: [
            value => {
                if (value) return true

                return 'E-mail is requred.'
            },
            value => {
                if (/.+@.+\..+/.test(value)) return true

                return 'E-mail must be valid.'
            },
        ],
    }),
}
</script>