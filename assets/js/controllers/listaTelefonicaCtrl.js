angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function ($scope, contatosAPI, operadorasAPI, serialGenerator) {

			$scope.app = "Lista Telefonica";

			$scope.contatos = [];

			$scope.operadoras = [];

			var carregarContatos = function (){
				contatosAPI.getContatos().then(function onSuccess(response){
					var data = response.data;
					$scope.contatos = data;
				}, function onError(response){
					var data = response.data;
					$scope.message = "Erro: " + data;
				});
			};

			var carregarOperadoras = function(){
				operadorasAPI.getOperadoras().then(function(response){
					var data = response.data;
					$scope.operadoras = data;
				});
			};

			$scope.adicionarContato = function(contato){

				contato.serial = serialGenerator.generate();
				contato.data = new Date();

				contatosAPI.saveContato(contato).then(function onSuccess(data){
					delete $scope.contato;
				    $scope.contatoForm.$setPristine();
				    carregarContatos();
				});
				//$scope.contatos.push(contato);
				
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

			carregarContatos();
			carregarOperadoras();
});
