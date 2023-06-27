import React, { useState } from 'react';
import { Dialog, DialogContent, DialogActions, Button, TextField } from '@mui/material';

const TextModal = ({ open, handleClose, handleSubmit, data }) => {
  const [formData, setFormData] = useState(data);

  const handleCancel = () => {
    handleClose();
  };

  const handleDoneClick = () => {
    debugger;
    handleSubmit(formData.value);
  };

  const handleInputChange = (e) => {
    const { value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      value: value,
    }));
  };

  const handleClear = () => {
    setFormData((prevData) => ({
      ...prevData,
      value: '',
    }));
  };

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
      <DialogContent>
        <h2>{formData.title}</h2>
        <form className="search-form search-bar">
          <TextField
            type="text"
            placeholder={formData.placeholder}
            value={formData.value}
            onChange={handleInputChange}
            InputProps={{
              endAdornment: formData.value.length > 0 && (
                <span className="search-icon">
                  <i className="fas fa-times icon-close" onClick={handleClear} aria-label="Clear" title="Clear"></i>
                </span>
              ),
            }}
          />
        </form>
      </DialogContent>
      <DialogActions className="action-buttons">
        <Button variant="outlined" color="error" onClick={handleCancel}>
          Cancel
        </Button>
        <Button variant="contained" color="success" onClick={handleDoneClick}>
          Done
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default TextModal;
