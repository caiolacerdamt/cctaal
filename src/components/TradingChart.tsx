import { motion } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';

const TradingChart = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [price, setPrice] = useState(115.42);

    // Simulate live data updates
    useEffect(() => {
        const interval = setInterval(() => {
            setPrice(prev => prev + (Math.random() - 0.5) * 0.5);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    // Draw chart on canvas
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Settings
        const width = canvas.width;
        const height = canvas.height;
        const candleWidth = 8; // Narrower candles
        const gap = 4;

        // Clear canvas
        ctx.clearRect(0, 0, width, height);

        // Generate mock data if needed or just draw dynamic pattern
        // For visual appeal, we'll draw a set of candles that ends near the current price

        // Draw Grid
        ctx.strokeStyle = '#e5e7eb'; // Light gray
        ctx.lineWidth = 0.5;

        // Horizontal grid lines
        for (let i = 0; i < height; i += 40) {
            ctx.beginPath();
            ctx.moveTo(0, i);
            ctx.lineTo(width, i);
            ctx.stroke();
        }

        // Vertical grid lines
        for (let i = 0; i < width; i += 60) {
            ctx.beginPath();
            ctx.moveTo(i, 0);
            ctx.lineTo(i, height);
            ctx.stroke();
        }

        // Draw Candles
        let currentY = height / 2;
        let prevClose = currentY;

        // Mock data generator for visualization (drawing backwards from right to left)
        const candles = [];
        for (let i = 0; i < (width / (candleWidth + gap)); i++) {
            const change = (Math.random() - 0.5) * 20;
            const close = prevClose;
            const open = close - change;
            const high = Math.max(open, close) + Math.random() * 10;
            const low = Math.min(open, close) - Math.random() * 10;

            candles.push({ open, close, high, low });
            prevClose = open; // Next candle's close is roughly this candle's open (backwards logic)
        }

        // Draw candles (iterate normally to draw correctly)
        candles.reverse().forEach((candle, i) => {
            const x = i * (candleWidth + gap);
            const isGreen = candle.close < candle.open; // In canvas Y is down, so lower Y is higher price

            ctx.strokeStyle = isGreen ? '#22c55e' : '#ef4444';
            ctx.fillStyle = isGreen ? '#22c55e' : '#ef4444';
            ctx.lineWidth = 1;

            // Wicked
            ctx.beginPath();
            ctx.moveTo(x + candleWidth / 2, candle.high);
            ctx.lineTo(x + candleWidth / 2, candle.low);
            ctx.stroke();

            // Body
            const bodyTop = Math.min(candle.open, candle.close);
            const bodyHeight = Math.abs(candle.open - candle.close);
            ctx.fillRect(x, bodyTop, candleWidth, bodyHeight === 0 ? 1 : bodyHeight);
        });

        // Current Price Line
        ctx.beginPath();
        ctx.setLineDash([4, 4]);
        ctx.strokeStyle = '#3b82f6';
        ctx.moveTo(0, currentY); // Simplified to center for demo
        ctx.lineTo(width, currentY);
        ctx.stroke();
        ctx.setLineDash([]);

        // Price Label Background
        ctx.fillStyle = '#3b82f6';
        ctx.fillRect(width - 45, currentY - 10, 45, 20);

        // Price Label Text
        ctx.fillStyle = '#ffffff';
        ctx.font = '10px sans-serif';
        ctx.fillText(price.toFixed(2), width - 40, currentY + 4);

    }, [price]);

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white rounded-sm border border-gray-200 shadow-lg overflow-hidden flex flex-col h-[400px] w-full"
        >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100 bg-gray-50/50">
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                    <span className="text-sm font-bold text-gray-700">SOJA/USD</span>
                    <span className="text-xs text-gray-400">CBOT · 15min</span>
                </div>
                <div className="flex gap-2">
                    <div className="h-2 w-12 bg-gray-200 rounded-full"></div>
                    <div className="h-2 w-8 bg-gray-200 rounded-full"></div>
                </div>
            </div>

            {/* Chart Area */}
            <div className="flex-1 relative bg-white">
                <canvas
                    ref={canvasRef}
                    width={600}
                    height={350}
                    className="w-full h-full object-cover"
                />

                {/* Floating Info Overlay */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-3 rounded border border-gray-100 shadow-sm">
                    <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">Cotação Atual</div>
                    <div className="text-2xl font-mono font-bold text-gray-900 flex items-center gap-2">
                        {price.toFixed(2)}
                        <span className="text-sm text-green-500 font-medium">+1.24%</span>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default TradingChart;
