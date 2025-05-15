const express = require('express');
const cors = require('cors');
const { createClient } = require('@supabase/supabase-js');

const app = express();
const PORT = process.env.PORT || 3000;

const supabaseUrl = 'https://jkctwpdyjymyvmrxhcml.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImprY3R3cGR5anlteXZtcnhoY21sIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDcxNTgxOTcsImV4cCI6MjA2MjczNDE5N30.UWWUc8FjNa_wfdRpYI9h4326Peroi33VvOnyXQRRXeY';
const supabase = createClient(supabaseUrl, supabaseKey);

app.use(cors());
app.use(express.json());

app.post('/api/save', async (req, res) => {
  const { id, name, thumb } = req.body;
  const { data, error } = await supabase.from('favorites').insert([{ id, name, thumb }]);
  if (error) return res.status(500).json({ error });
  res.json({ message: 'Saved!', data });
});

app.get('/api/favorites', async (req, res) => {
  const { data, error } = await supabase.from('favorites').select('*');
  if (error) return res.status(500).json({ error });
  res.json(data);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
