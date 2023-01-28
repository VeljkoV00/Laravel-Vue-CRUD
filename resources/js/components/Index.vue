<template>
  <table>
    <tr>
      <th>Id</th>
      <th>Name</th>
      <th>Description</th>
      <th>Price</th>
    </tr>
    <tr v-for="product in products" :key="product.id">
      <td>{{ product.id }}</td> 
      <td>{{ product.name }}</td>
      <td>{{ product.description }}</td>
      <td>{{ product.price }}</td>
      <td>
        <button @click="deleteProduct(product.id)">Delete</button>
        <router-link :to="{name: 'edit', params: { id: product.id }}" class="btn btn-success">Edit</router-link>
      </td>
      
    </tr>
  </table>
  <div>
 <router-link to="/create" class="nav-item nav-link">Create Product</router-link>

  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      products: []
    }
  },
  mounted() {
    axios.get('http://127.0.0.1:8000/api/v1/products')
      .then(response => {
        this.products = response.data.data;
      });
  },
  methods: {
    deleteProduct(id) { 
                    axios
                    .delete(`http://localhost:8000/api/v1/products/${id}`)
                    .then(response => {
                        let i = this.products.map(data => data.id).indexOf(id);
                        this.products.splice(i, 1)
                    })
                    .catch(error => {
                        console.log(error)
                    });
            }
        
  }
}
</script>

<style>
</style>