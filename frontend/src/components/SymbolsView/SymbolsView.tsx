import './symbolsView.css';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { setActiveSymbol, selectActiveSymbol } from '@/store/dashboardOptionsSlice';

import SymbolsGrid from '@/components/SymbolsGrid';
import PriceChart from '@/components/PriceChart';
import DesktopInfo from './src/DesktopInfo';

const SymbolsView = () => {
  const dispatch = useAppDispatch();
  const activeSymbol = useAppSelector(selectActiveSymbol);

  const handleSymbolClick = (symbolId: string) => {
    dispatch(setActiveSymbol(activeSymbol === symbolId ? null : symbolId));
  };

  return (
    <div className="symbolsView">
      <DesktopInfo />
      <div className="symbolsView__content">
        <div className="symbolsView__chart">
          <h3>PRICE HISTORY</h3>
          <PriceChart symbolId={activeSymbol} />
        </div>

        <SymbolsGrid onSymbolClick={handleSymbolClick} symbolId={activeSymbol} />
      </div>
    </div>
  );
};

export default SymbolsView;
