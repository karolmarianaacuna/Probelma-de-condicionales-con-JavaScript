let eleccion = prompt(
  "Bienvenido usuario a nuestra heladeria, quien de los tres va a ser el primero que atendamos: "
);

eleccion = eleccion.toLocaleLowerCase();

switch (eleccion) {
  case "roberto":
    let dineroRoberto = parseFloat(prompt("Roberto, ¿cuánto dinero tienes?")); // lO CORRECTO ES HACER EL CASTEO O LA CONVERSION POR LO QUE VAMOS A TRABAJAR CON NUMEROS

    if (dineroRoberto >= 0.6 && dineroRoberto < 1) {
      alert("Roberto, te alcanza para un helado de agua");
    } else if (dineroRoberto >= 1 && dineroRoberto < 1.6) {
      alert("Roberto, te alcanza para un helado de crema");
    } else if (dineroRoberto >= 1.6 && dineroRoberto < 1.7) {
      alert("Roberto, te alcanza para un helado de Heladovich");
    } else if (dineroRoberto >= 1.7 && dineroRoberto < 1.8) {
      alert("Roberto, te alcanza para un helado de marca Helardo");
    } else if (dineroRoberto >= 1.8 && dineroRoberto < 2.9) {
      alert(
        "Roberto, te alcanza para un pote con confites o un pote de 1/4 KG"
      );
    } else {
      alert("Lo sentimos, no te alcanza para nada.");
    }

    break;
  case "pedro":
    let dineroPedro = parseFloat(prompt("Pedro, ¿cuánto dinero tienes?"));
    if (dineroPedro >= 0.6 && dineroPedro < 1) {
      alert("pedro, te alcanza para un helado de agua");
    } else if (dineroPedro >= 1 && dineroPedro < 1.6) {
      alert("pedro, te alcanza para un helado de crema");
    } else if (dineroPedro >= 1.6 && dineroPedro < 1.7) {
      alert("pedro, te alcanza para un helado de Heladovich");
    } else if (dineroPedro >= 1.7 && dineroPedro < 1.8) {
      alert("pedro, te alcanza para un helado de marca Helardo");
    } else if (dineroPedro >= 1.8 && dineroPedro < 2.9) {
      alert(
        "pedro, te alcanza para un pote con confites o un pote de 1/4 KG"
      );
    } else {
      alert("Lo sentimos, no te alcanza para nada.");
    }

    break;
  case "cofia":
    let dineroCofia = prompt("Cofia ¿cuánto dinero tienes?");

    if (dineroCofia >= 0.6 && dineroCofia < 1) {
      alert("cofia, te alcanza para un helado de agua");
    } else if (dineroCofia >= 1 && dineroCofia < 1.6) {
      alert("cofia, te alcanza para un helado de crema");
    } else if (dineroCofia >= 1.6 && dineroCofia < 1.7) {
      alert("cofia, te alcanza para un helado de Heladovich");
    } else if (dineroCofia >= 1.7 && dineroCofia < 1.8) {
      alert("cofia, te alcanza para un helado de marca Helardo");
    } else if (dineroCofia >= 1.8 && dineroCofia < 2.9) {
      alert(
        "cofia, te alcanza para un pote con confites o un pote de 1/4 KG"
      );
    } else {
      alert("Lo sentimos, no te alcanza para nada.");
    }

    break;

  default:
    alert(`eL usuario : ${eleccion} NO se encuentra en nuestra lista`);
    break;
}
