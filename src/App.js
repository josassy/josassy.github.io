import React from 'react';
import Header from './Header.js';
import './App.scss';

function BodyContent() {
  return (
    <div className="page-content">
    <h1>Vos autem cum perspicuis dubia debeatis illustrare, dubiis perspicua conamini tollere.</h1>

    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Si enim ad populum me vocas, eum. Haec quo modo conveniant, non sane intellego. Duo Reges: constructio interrete. Quid enim? <b>Dic in quovis conventu te omnia facere, ne doleas.</b> Sed tamen intellego quid velit. Nos commodius agimus. Idem iste, inquam, de voluptate quid sentit? </p>

    <ul>
    	<li>Idem fecisset Epicurus, si sententiam hanc, quae nunc Hieronymi est, coniunxisset cum Aristippi vetere sententia.</li>
    	<li>Quamquam ab iis philosophiam et omnes ingenuas disciplinas habemus;</li>
    	<li>Sed ad illum redeo.</li>
    	<li>Et si in ipsa gubernatione neglegentia est navis eversa, maius est peccatum in auro quam in palea.</li>
    	<li>Cum audissem Antiochum, Brute, ut solebam, cum M.</li>
    	<li>Omnia contraria, quos etiam insanos esse vultis.</li>
    </ul>


    <ol>
    	<li>Cum sciret confestim esse moriendum eamque mortem ardentiore studio peteret, quam Epicurus voluptatem petendam putat.</li>
    	<li>In qua si nihil est praeter rationem, sit in una virtute finis bonorum;</li>
    	<li>Dicet pro me ipsa virtus nec dubitabit isti vestro beato M.</li>
    	<li>Hominum non spinas vellentium, ut Stoici, nec ossa nudantium, sed eorum, qui grandia ornate vellent, enucleate minora dicere.</li>
    </ol>


    <h2>Neque solum ea communia, verum etiam paria esse dixerunt.</h2>

    <p>Non est igitur summum malum dolor. Esse enim, nisi eris, non potes. <b>Teneo, inquit, finem illi videri nihil dolere.</b> </p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Si enim ad populum me vocas, eum. Haec quo modo conveniant, non sane intellego. Duo Reges: constructio interrete. Quid enim? <b>Dic in quovis conventu te omnia facere, ne doleas.</b> Sed tamen intellego quid velit. Nos commodius agimus. Idem iste, inquam, de voluptate quid sentit? </p>

    <ul>
      <li>Idem fecisset Epicurus, si sententiam hanc, quae nunc Hieronymi est, coniunxisset cum Aristippi vetere sententia.</li>
      <li>Quamquam ab iis philosophiam et omnes ingenuas disciplinas habemus;</li>
      <li>Sed ad illum redeo.</li>
      <li>Et si in ipsa gubernatione neglegentia est navis eversa, maius est peccatum in auro quam in palea.</li>
      <li>Cum audissem Antiochum, Brute, ut solebam, cum M.</li>
      <li>Omnia contraria, quos etiam insanos esse vultis.</li>
    </ul>


    <ol>
      <li>Cum sciret confestim esse moriendum eamque mortem ardentiore studio peteret, quam Epicurus voluptatem petendam putat.</li>
      <li>In qua si nihil est praeter rationem, sit in una virtute finis bonorum;</li>
      <li>Dicet pro me ipsa virtus nec dubitabit isti vestro beato M.</li>
      <li>Hominum non spinas vellentium, ut Stoici, nec ossa nudantium, sed eorum, qui grandia ornate vellent, enucleate minora dicere.</li>
    </ol>


    <h2>Neque solum ea communia, verum etiam paria esse dixerunt.</h2>

    <p>Non est igitur summum malum dolor. Esse enim, nisi eris, non potes. <b>Teneo, inquit, finem illi videri nihil dolere.</b> </p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Si enim ad populum me vocas, eum. Haec quo modo conveniant, non sane intellego. Duo Reges: constructio interrete. Quid enim? <b>Dic in quovis conventu te omnia facere, ne doleas.</b> Sed tamen intellego quid velit. Nos commodius agimus. Idem iste, inquam, de voluptate quid sentit? </p>

    <ul>
    	<li>Idem fecisset Epicurus, si sententiam hanc, quae nunc Hieronymi est, coniunxisset cum Aristippi vetere sententia.</li>
    	<li>Quamquam ab iis philosophiam et omnes ingenuas disciplinas habemus;</li>
    	<li>Sed ad illum redeo.</li>
    	<li>Et si in ipsa gubernatione neglegentia est navis eversa, maius est peccatum in auro quam in palea.</li>
    	<li>Cum audissem Antiochum, Brute, ut solebam, cum M.</li>
    	<li>Omnia contraria, quos etiam insanos esse vultis.</li>
    </ul>


    <ol>
    	<li>Cum sciret confestim esse moriendum eamque mortem ardentiore studio peteret, quam Epicurus voluptatem petendam putat.</li>
    	<li>In qua si nihil est praeter rationem, sit in una virtute finis bonorum;</li>
    	<li>Dicet pro me ipsa virtus nec dubitabit isti vestro beato M.</li>
    	<li>Hominum non spinas vellentium, ut Stoici, nec ossa nudantium, sed eorum, qui grandia ornate vellent, enucleate minora dicere.</li>
    </ol>


    <h2>Neque solum ea communia, verum etiam paria esse dixerunt.</h2>

    <p>Non est igitur summum malum dolor. Esse enim, nisi eris, non potes. <b>Teneo, inquit, finem illi videri nihil dolere.</b> </p>

    </div>
  )
}

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <BodyContent />
      </div>
    );
  }
}

export default App;
