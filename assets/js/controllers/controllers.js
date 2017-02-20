angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function ($scope) {

			$scope.app = "Lista Telefonica";

			$scope.contatos = [
				{
				   nome: "Fernando", 
				   telefone: "99999-8888",
				   data: new Date(), 
				   operadora:{
				   	    nome: "Vivo", 
				   	    codigo: 15, 
				   	    categoria: "Celular"
				   	}, 
				   	cor: "blue"},
				{
					nome: "Nancy", 
					telefone: "88888-7777", 
					data: new Date(), 
					operadora:{
						nome: "Vivo", 
						codigo: 15, 
						categoria: "Celular"
					}, 
					cor: "green"},
				{
					nome: "Elise", 
					telefone: "3333-4444", 
					data: new Date(), 
					operadora:{nome: "Vivo", 
					codigo: 15, 
					categoria: "Celular"
				}, 
				cor: "yellow"},
				{
					nome: "Cibele",
					telefone: "98765-4321",
					data: new Date(),
					operadora:{
						nome: "Vivo",
						codigo: 15, 
						categoria: "Celular"
					}, 
					cor: "red"}
			];

			$scope.operadoras = [
			    {nome: "Tim", codigo: 41, categoria: "Celular", preco: 1},
			    {nome: "Oi", codigo: 14, categoria: "Celular", preco: 3},
			    {nome: "Vivo", codigo: 15, categoria: "Celular", preco: 2},
			    {nome: "Claro", codigo: 10, categoria: "Celular", preco: 2},
			    {nome: "Nextel", codigo: 12, categoria: "Celular", preco: 5},
			    {nome: "Net", codigo: 21, categoria: "Fixo", preco: 2}
			];

			$scope.adicionarContato = function(contato){
				$scope.contatos.push(contato);
				delete $scope.contato;
				$scope.contatoForm.$setPristine();
			};
			$scope.apagarContatos = function(contatos){
				$scope.contatos = contatos.filter(function(contato){
					if(!contato.selecionado)return contato;
				});
			};
			$scope.isContatoSelecionado = function(contatos){
				return contatos.some(function(contato){
					return contato.selecionado;
				});
			};
			$scope.ordenarPor = function(campo){
				$scope.criterioDeOrdenacao = campo; 
				$scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;			
			};
		});
